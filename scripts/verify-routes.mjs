import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import puppeteer from "puppeteer-core";

/**
 * Deterministic full-route verifier for the customer site.
 *
 * Run against a production server (`npm run build && npm run start -- -p 3100`):
 *   node scripts/verify-routes.mjs
 *
 * Checks, per public/review-routes.json (the 37 customer review routes):
 *   1. HTTP 200 and exactly one current Review Bridge tag in the INITIAL HTML
 *   2. sitemap.xml parity: "/" first, then the 36 interior routes in order
 *   3. unique <title> and meta description per route
 *   4. exactly one <h1> per route, unique across routes
 *   5. no broken/failed images
 *   6. no horizontal overflow at 1440x900 and 390x844
 *   7. no internal production language leaking into visible text
 * Screenshots land in tmp/verify/ (jpeg, both viewports) for the visual pass.
 */
const BASE = process.env.VERIFY_BASE ?? "http://localhost:3100";
const PROD_ORIGIN = "https://elitephysicianswealthplanning.com";
const BRIDGE_SRC = "https://app.gomega.ai/review-bridge/v7/review-bridge.js";
const CHROMIUM = "/var/lib/megaclaw/user-tools/apt/usr/lib/chromium/chromium";
const LD_PATH =
  "/var/lib/megaclaw/user-tools/apt/usr/lib/x86_64-linux-gnu:/var/lib/megaclaw/user-tools/apt/usr/lib";
const OUT = "tmp/verify";
const VIEWPORTS = [
  { name: "1440", width: 1440, height: 900 },
  { name: "390", width: 390, height: 844 },
];
const LEAK_PATTERNS = [
  /content[ -]gate/i,
  /\bpending\b/i,
  /source page/i,
  /build[ -]time/i,
  /\bplaceholder\b/i,
  /\bTBD\b/,
  /\blorem\b/i,
  /customer input/i,
  /\bunresolved\b/i,
  /\bdiagnostic\b/i,
  /internal review/i,
  /held state/i,
  /manuscript unapproved/i,
  /\bfake\b/i,
  /white plains/i,
  /\bwaldorf\b/i,
  /customer[ -]approv/i,
  /\bCUSTOMER INPUT\b/,
];

const routes = JSON.parse(readFileSync("public/review-routes.json", "utf8"));
const failures = [];
const report = { base: BASE, routes: {} };

function fail(route, check, detail) {
  failures.push({ route, check, detail });
}

function slugOf(route) {
  return route === "/" ? "home" : route.slice(1).replaceAll("/", "--");
}

async function checkInitialHtml(route, seenTitles, seenDescriptions) {
  const res = await fetch(`${BASE}${route}`);
  if (res.status !== 200) fail(route, "http", `status ${res.status}`);
  const html = await res.text();

  const bridgeCount = html.split(`src="${BRIDGE_SRC}"`).length - 1;
  if (bridgeCount !== 1) fail(route, "bridge", `count ${bridgeCount}`);

  const title = /<title>([^<]*)<\/title>/.exec(html)?.[1] ?? "";
  if (!title) fail(route, "title", "missing");
  else if (seenTitles.has(title)) fail(route, "title", `duplicate: ${title}`);
  seenTitles.set(title, route);

  const description =
    /<meta name="description" content="([^"]*)"/.exec(html)?.[1] ?? "";
  if (!description) fail(route, "description", "missing");
  else if (seenDescriptions.has(description))
    fail(route, "description", `duplicate of ${seenDescriptions.get(description)}`);
  seenDescriptions.set(description, route);

  const text = html
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<[^>]+>/g, " ");
  for (const pattern of LEAK_PATTERNS) {
    const match = pattern.exec(text);
    if (match) fail(route, "leak", `${pattern} → "…${text.slice(Math.max(0, match.index - 40), match.index + 50).trim()}…"`);
  }
  return { title, description };
}

async function checkSitemap() {
  const res = await fetch(`${BASE}/sitemap.xml`);
  if (res.status !== 200) return fail("/sitemap.xml", "http", `status ${res.status}`);
  const xml = await res.text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const expected = routes.map((r) =>
    r === "/" ? PROD_ORIGIN : `${PROD_ORIGIN}${r}`,
  );
  if (JSON.stringify(locs) !== JSON.stringify(expected)) {
    const extra = locs.filter((l) => !expected.includes(l));
    const missing = expected.filter((l) => !locs.includes(l));
    fail("/sitemap.xml", "parity", `extra=[${extra}] missing=[${missing}] order=${JSON.stringify(locs.slice(0, 3))}`);
  }
}

async function auditInBrowser(browser, route, vp, seenH1s) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto(`${BASE}${route}`, { waitUntil: "networkidle0", timeout: 90000 });
    await page.evaluate(async () => {
      await document.fonts.ready;
      window.scrollTo(0, document.body.scrollHeight);
      await new Promise((r) => setTimeout(r, 700));
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 300));
    });
    const metrics = await page.evaluate(() => {
      const doc = document.scrollingElement;
      return {
        overflow: doc.scrollWidth - doc.clientWidth,
        broken: [...document.images]
          .filter((img) => img.getClientRects().length > 0)
          .filter((img) => !img.complete || img.naturalWidth === 0)
          .map((img) => img.currentSrc || img.src),
        h1s: [...document.querySelectorAll("h1")].map((h) => h.textContent.trim()),
      };
    });
    if (metrics.overflow > 0)
      fail(route, `overflow@${vp.name}`, `${metrics.overflow}px`);
    if (metrics.broken.length > 0)
      fail(route, `images@${vp.name}`, metrics.broken.join(", "));
    if (vp.name === "1440") {
      if (metrics.h1s.length !== 1)
        fail(route, "h1", `count ${metrics.h1s.length}`);
      const h1 = metrics.h1s[0] ?? "";
      if (h1 && seenH1s.has(h1)) fail(route, "h1", `duplicate: ${h1}`);
      seenH1s.set(h1, route);
    }
    await page.screenshot({
      path: `${OUT}/${slugOf(route)}-${vp.name}.jpg`,
      fullPage: true,
      type: "jpeg",
      quality: 60,
    });
    return metrics;
  } finally {
    await page.close();
  }
}

mkdirSync(OUT, { recursive: true });
const seenTitles = new Map();
const seenDescriptions = new Map();
const seenH1s = new Map();

await checkSitemap();
for (const route of routes) {
  report.routes[route] = await checkInitialHtml(route, seenTitles, seenDescriptions);
}

const browser = await puppeteer.launch({
  executablePath: CHROMIUM,
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"],
  env: { ...process.env, LD_LIBRARY_PATH: LD_PATH },
});
try {
  for (const route of routes) {
    for (const vp of VIEWPORTS) {
      const metrics = await auditInBrowser(browser, route, vp, seenH1s);
      report.routes[route][vp.name] = {
        overflow: metrics.overflow,
        brokenImages: metrics.broken.length,
      };
      process.stdout.write(`checked ${route} @${vp.name}\n`);
    }
  }
} finally {
  await browser.close();
}

report.failures = failures;
writeFileSync(`${OUT}/report.json`, JSON.stringify(report, null, 2));
if (failures.length > 0) {
  console.error(`\nFAILURES (${failures.length}):`);
  for (const f of failures) console.error(`  ${f.route} [${f.check}] ${f.detail}`);
  process.exit(1);
}
console.log(`\nAll ${routes.length} routes passed all checks.`);
