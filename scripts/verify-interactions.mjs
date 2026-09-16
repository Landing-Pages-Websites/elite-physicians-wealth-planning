import puppeteer from "puppeteer-core";

/**
 * Interactive-control verification against a running production server:
 *   - desktop nav dropdown opens, closes on Escape, links navigate
 *   - mobile menu opens and reaches routes
 *   - /checkup produces an observable personalized result and restarts
 *   - /contact validates first (no submit while invalid), then submits through
 *     a STUBBED collector (the real endpoint is never hit) and fires the
 *     form_submission dataLayer event only on the confirmed 200
 */
const BASE = process.env.VERIFY_BASE ?? "http://localhost:3100";
const CHROMIUM = "/var/lib/megaclaw/user-tools/apt/usr/lib/chromium/chromium";
const LD_PATH =
  "/var/lib/megaclaw/user-tools/apt/usr/lib/x86_64-linux-gnu:/var/lib/megaclaw/user-tools/apt/usr/lib";
const failures = [];

function check(name, condition, detail = "") {
  if (condition) console.log(`ok    ${name}`);
  else {
    console.error(`FAIL  ${name} ${detail}`);
    failures.push(name);
  }
}

const browser = await puppeteer.launch({
  executablePath: CHROMIUM,
  args: ["--no-sandbox", "--disable-gpu"],
  env: { ...process.env, LD_LIBRARY_PATH: LD_PATH },
});

async function desktopNav() {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${BASE}/`, { waitUntil: "networkidle0" });
  const trigger = await page.$('nav[aria-label="Primary"] button');
  await trigger.click();
  await page.waitForFunction(
    () => document.querySelector('nav[aria-label="Primary"] button[aria-expanded="true"]') !== null,
  );
  const linkCount = await page.evaluate(
    () => document.querySelectorAll('nav[aria-label="Primary"] a[href="/tax-planning-for-physicians"]').length,
  );
  check("desktop dropdown opens with route links", linkCount === 1);
  await page.keyboard.press("Escape");
  const closed = await page.evaluate(
    () => document.querySelector('nav[aria-label="Primary"] button[aria-expanded="true"]') === null,
  );
  check("desktop dropdown closes on Escape", closed);
  await trigger.click();
  await Promise.all([
    page.waitForNavigation({ waitUntil: "domcontentloaded" }),
    page.click('nav[aria-label="Primary"] a[href="/tax-planning-for-physicians"]'),
  ]);
  check("desktop nav navigates", page.url().endsWith("/tax-planning-for-physicians"));
  await page.close();
}

async function mobileNav() {
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(`${BASE}/`, { waitUntil: "networkidle0" });
  await page.click('button[aria-controls="mobile-menu"]');
  await page.waitForSelector("#mobile-menu");
  const links = await page.evaluate(
    () => document.querySelectorAll("#mobile-menu a").length,
  );
  check("mobile menu opens with links", links >= 20, `links=${links}`);
  await Promise.all([
    page.waitForNavigation({ waitUntil: "domcontentloaded" }),
    page.click('#mobile-menu a[href="/schedule"]'),
  ]);
  check("mobile nav navigates to /schedule", page.url().endsWith("/schedule"));
  await page.close();
}

async function checkupFlow() {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${BASE}/checkup`, { waitUntil: "networkidle0" });
  const submitSel = '#interactive-review button[type="button"]';
  await page.evaluate((sel) => {
    const buttons = [...document.querySelectorAll(sel)];
    buttons.find((b) => /review|see|show|build|summary/i.test(b.textContent))?.click();
  }, submitSel);
  await new Promise((r) => setTimeout(r, 300));
  const beforeGate = await page.evaluate(
    () =>
      document.querySelectorAll(
        '#interactive-review [id$="-error"], #interactive-review [aria-invalid="true"], #interactive-review [role="alert"]',
      ).length,
  );
  check("checkup blocks empty submission with visible validation", beforeGate > 0, `flags=${beforeGate}`);

  const boxes = await page.$$('#interactive-review input[type="checkbox"]');
  await boxes[0].click();
  await boxes[1].click();
  const radios = await page.$$('#interactive-review input[type="radio"]:not([disabled])');
  if (radios.length > 0) await radios[0].click();
  await page.evaluate(() => {
    const acknowledge = [...document.querySelectorAll('#interactive-review input[type="checkbox"]')].at(-1);
    if (!acknowledge.checked) acknowledge.click();
  });
  await page.evaluate((sel) => {
    const buttons = [...document.querySelectorAll(sel)];
    buttons.find((b) => /review|see|show|build|summary/i.test(b.textContent))?.click();
  }, submitSel);
  await page.waitForFunction(
    () => document.querySelector("#results-guidance")?.textContent.length > 100,
    { timeout: 5000 },
  );
  const result = await page.evaluate(() => {
    const section = document.querySelector("#results-guidance");
    return {
      hasLinks: section.querySelectorAll('a[href^="/"]').length,
      hasRestart: [...section.querySelectorAll("button")].some((b) => /start over|restart/i.test(b.textContent)),
    };
  });
  check("checkup renders personalized result with route links", result.hasLinks >= 2, JSON.stringify(result));
  check("checkup offers restart", result.hasRestart);
  await page.close();
}

async function contactForm() {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  let collectorHits = 0;
  await page.setRequestInterception(true);
  page.on("request", (req) => {
    if (req.url().includes("analytics.gomega.ai/submission/submit")) {
      const cors = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "content-type",
      };
      if (req.method() === "POST") collectorHits += 1;
      req.respond({
        status: 200,
        headers: cors,
        contentType: "application/json",
        body: "{}",
      });
      return;
    }
    req.continue();
  });
  await page.goto(`${BASE}/contact`, { waitUntil: "networkidle0" });

  await page.evaluate(() => {
    const buttons = [...document.querySelectorAll('#contact-form button[type="button"]')];
    buttons.find((b) => /send|submit|request/i.test(b.textContent))?.click();
  });
  await new Promise((r) => setTimeout(r, 400));
  const invalidCount = await page.evaluate(
    () => document.querySelectorAll('#contact-form [aria-invalid="true"]').length,
  );
  check("contact blocks empty submission with inline errors", invalidCount > 0, `invalid=${invalidCount}`);
  check("contact did not hit collector while invalid", collectorHits === 0);

  await page.evaluate(() => {
    function set(el, value) {
      const proto = el instanceof HTMLTextAreaElement ? HTMLTextAreaElement : el instanceof HTMLSelectElement ? HTMLSelectElement : HTMLInputElement;
      Object.getOwnPropertyDescriptor(proto.prototype, "value").set.call(el, value);
      el.dispatchEvent(new Event("input", { bubbles: true }));
      el.dispatchEvent(new Event("change", { bubbles: true }));
    }
    const form = document.querySelector("#contact-form form") ?? document.querySelector("#contact-form");
    for (const el of form.querySelectorAll("input, textarea, select")) {
      if (el.name === "companyWebsite" || el.type === "hidden") continue;
      if (el.type === "checkbox") { if (!el.checked) el.click(); continue; }
      if (el.type === "radio") { el.click(); continue; }
      if (el instanceof HTMLSelectElement) { set(el, el.options[el.options.length - 1].value); continue; }
      if (/email/i.test(el.name)) set(el, "verify-test@example.com");
      else if (/phone/i.test(el.name)) set(el, "301-555-0142");
      else set(el, "Verification Test");
    }
  });
  await page.evaluate(() => {
    const buttons = [...document.querySelectorAll('#contact-form button[type="button"]')];
    buttons.find((b) => /send|submit|request/i.test(b.textContent))?.click();
  });
  await page.waitForFunction(
    () => document.querySelector('#contact-form [role="status"]') !== null,
    { timeout: 8000 },
  );
  const dataLayerEvents = await page.evaluate(
    () => (window.dataLayer ?? []).filter((e) => e.event === "form_submission").length,
  );
  check("contact submits once to (stubbed) collector", collectorHits === 1, `hits=${collectorHits}`);
  check("contact fires form_submission only on success", dataLayerEvents === 1, `events=${dataLayerEvents}`);
  await page.close();
}

try {
  await desktopNav();
  await mobileNav();
  await checkupFlow();
  await contactForm();
} finally {
  await browser.close();
}
if (failures.length > 0) process.exit(1);
console.log("\nAll interaction checks passed.");
