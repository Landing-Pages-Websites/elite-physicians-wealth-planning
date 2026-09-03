import puppeteer from "puppeteer-core";
import { mkdirSync } from "node:fs";

// Playwright's bundled headless shell. NEVER the user's real Chrome install
// and never the "chrome" channel — that is their live browser.
const CHROMIUM =
  process.env.CHROMIUM_PATH ??
  `${process.env.HOME}/Library/Caches/ms-playwright/chromium_headless_shell-1234/chrome-headless-shell-mac-arm64/chrome-headless-shell`;
const BASE = "http://localhost:3100";
const OUT = "/tmp/verify";
const ROUTES = ["/", "/consult-ledger", "/decision-atlas"];
const VIEWPORTS = [
  { name: "1536", width: 1536, height: 864 },
  { name: "1440", width: 1440, height: 900 },
  { name: "390", width: 390, height: 844 },
];

mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROMIUM,
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"],
});

async function auditPage(route, vp) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto(`${BASE}${route}`, {
      waitUntil: "networkidle0",
      timeout: 60000,
    });
    await page.evaluate(() => document.fonts.ready);
    // force lazy images
    await page.evaluate(async () => {
      window.scrollTo(0, document.body.scrollHeight);
      await new Promise((r) => setTimeout(r, 800));
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 400));
    });
    const metrics = await page.evaluate(() => {
      const doc = document.scrollingElement;
      const broken = [...document.images]
        .filter((img) => img.getClientRects().length > 0)
        .filter((img) => !img.complete || img.naturalWidth === 0)
        .map((img) => img.currentSrc || img.src);
      const h1s = document.querySelectorAll("h1").length;
      const anchors = [
        ...document.querySelectorAll("section[id],main[id]"),
      ].map((s) => s.id);
      const bridge = document.querySelectorAll(
        'script[src="https://app.gomega.ai/review-bridge/v7/review-bridge.js"]'
      ).length;
      // A closed popover must not paint. Tailwind's `flex` overrides the UA
      // rule that hides one, which shipped an always-open nav panel over the
      // page at every viewport. Cheap to assert, invisible to every other check.
      const openPopovers = [...document.querySelectorAll("[popover]")]
        .filter((el) => el.getClientRects().length > 0 && !el.matches(":popover-open"))
        .map((el) => el.id || el.className);
      return {
        scrollWidth: doc.scrollWidth,
        clientWidth: doc.clientWidth,
        scrollHeight: doc.scrollHeight,
        broken,
        h1s,
        anchors,
        bridge,
        openPopovers,
      };
    });
    const slug = route === "/" ? "home" : route.slice(1);
    // The screenshot is a convenience for review, not an assertion. A very tall
    // mobile page exceeds Chrome's capture limit and used to abort the whole
    // audit, taking the real checks down with it.
    try {
      await page.screenshot({
        path: `${OUT}/${slug}-${vp.name}.png`,
        fullPage: true,
      });
    } catch (error) {
      console.error(`  (screenshot skipped for ${slug}-${vp.name}: ${error.message.split("\n")[0]})`);
    }
    return {
      route,
      viewport: vp.name,
      overflowX: metrics.scrollWidth > metrics.clientWidth,
      scrollWidth: metrics.scrollWidth,
      clientWidth: metrics.clientWidth,
      scrollHeight: metrics.scrollHeight,
      brokenImages: metrics.broken,
      h1Count: metrics.h1s,
      anchors: metrics.anchors,
      bridgeCount: metrics.bridge,
      leakedPopovers: metrics.openPopovers,
    };
  } finally {
    await page.close();
  }
}

try {
  const report = [];
  for (const route of ROUTES) {
    for (const vp of VIEWPORTS) {
      report.push(await auditPage(route, vp));
    }
  }
  console.log(JSON.stringify(report, null, 1));
} finally {
  await browser.close();
}
