import puppeteer from "puppeteer-core";
import { mkdirSync } from "node:fs";

const CHROMIUM = "/var/lib/megaclaw/user-tools/apt/usr/lib/chromium/chromium";
const BASE = "http://localhost:3100";
const OUT = "/tmp/verify";
const ROUTES = ["/", "/variant-a", "/variant-b"];
const VIEWPORTS = [
  { name: "1536", width: 1536, height: 864 },
  { name: "1440", width: 1440, height: 900 },
  { name: "390", width: 390, height: 844 },
];

mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROMIUM,
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"],
  env: {
    ...process.env,
    LD_LIBRARY_PATH:
      "/var/lib/megaclaw/user-tools/apt/usr/lib/x86_64-linux-gnu:/var/lib/megaclaw/user-tools/apt/usr/lib",
  },
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
      return {
        scrollWidth: doc.scrollWidth,
        clientWidth: doc.clientWidth,
        scrollHeight: doc.scrollHeight,
        broken,
        h1s,
        anchors,
        bridge,
      };
    });
    const slug = route === "/" ? "home" : route.slice(1);
    await page.screenshot({
      path: `${OUT}/${slug}-${vp.name}.png`,
      fullPage: true,
    });
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
