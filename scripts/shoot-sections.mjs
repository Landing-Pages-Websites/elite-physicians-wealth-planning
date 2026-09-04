/**
 * Section screenshots for design audit. Not a gate — this exists so the
 * rendered band can be looked at, which is the thing that kept going wrong
 * when the audit ran on the DOM instead of the pixels.
 *
 * Run: node scripts/shoot-sections.mjs [route] [width]
 */
import puppeteer from "puppeteer-core";
import { mkdirSync } from "node:fs";

const CHROMIUM =
  process.env.CHROMIUM_PATH ??
  `${process.env.HOME}/Library/Caches/ms-playwright/chromium_headless_shell-1234/chrome-headless-shell-mac-arm64/chrome-headless-shell`;
const BASE = process.env.BASE ?? "http://localhost:3100";
const route = process.argv[2] ?? "/consult-ledger";
const width = Number(process.argv[3] ?? 1440);
const OUT = process.env.OUT ?? "/tmp/shots";
mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROMIUM,
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
await page.goto(BASE + route, { waitUntil: "networkidle0", timeout: 60000 });
await page.addStyleTag({
  content: `*,*::before,*::after{animation:none!important;transition:none!important}
  .va-reveal{opacity:1!important;transform:none!important}`,
});
await page.evaluate(() => document.fonts.ready);
await page.evaluate(async () => {
  window.scrollTo(0, document.body.scrollHeight);
  await new Promise((r) => setTimeout(r, 900));
  window.scrollTo(0, 0);
  await new Promise((r) => setTimeout(r, 400));
});

// The header is fixed, so scrolling a section's top to y=0 parks the band's
// first 86px underneath it. Every audit run before this one was reading a
// section with its opening line, and in separate-rooms two whole labels,
// hidden behind the masthead — a defect in the tool that read as a defect in
// the page.
const headerH = await page.evaluate(() => {
  const h = document.querySelector("header");
  return h ? Math.round(h.getBoundingClientRect().height) : 0;
});

const sections = await page.evaluate(() =>
  [...document.querySelectorAll("section[id], main[id], header, footer")].map((el) => {
    const r = el.getBoundingClientRect();
    return {
      id: el.id || el.tagName.toLowerCase(),
      top: Math.round(r.top + window.scrollY),
      height: Math.round(r.height),
    };
  }),
);

const slug = route.replace(/\W+/g, "-").replace(/^-|-$/g, "") || "root";
for (const s of sections) {
  if (s.height < 40) continue;
  await page.setViewport({ width, height: Math.min(s.height + headerH, 2400) });
  await page.evaluate((top) => window.scrollTo(0, top), s.top - headerH);
  await new Promise((r) => setTimeout(r, 250));
  await page.screenshot({ path: `${OUT}/${slug}-${width}-${s.id}.png` });
  console.log(`${s.id}\t${s.height}px`);
}
await browser.close();
