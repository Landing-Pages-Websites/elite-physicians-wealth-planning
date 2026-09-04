/**
 * Stack a rendered section directly under its approved reference frame.
 *
 * This exists because of a specific failure: I audited sections against my own
 * taste for several rounds without ever putting the approved frame next to what
 * I had built. The refs were in `public/design/{a,b}/refs/` the whole time. Two
 * screenshots in two windows is not a comparison — the eye forgives everything
 * it cannot see side by side.
 *
 * Run: node scripts/compare-to-ref.mjs <a|b> <section-id>
 *      node scripts/compare-to-ref.mjs b separate-rooms
 *
 * Writes /tmp/compare/<dir>-<section>.png — reference on top, build below,
 * both scaled to the same width, with a divider between them.
 */
import puppeteer from "puppeteer-core";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { PNG } from "pngjs";

const CHROMIUM =
  process.env.CHROMIUM_PATH ??
  `${process.env.HOME}/Library/Caches/ms-playwright/chromium_headless_shell-1234/chrome-headless-shell-mac-arm64/chrome-headless-shell`;
const BASE = process.env.BASE ?? "http://localhost:3000";
const OUT = "/tmp/compare";

/** Which route each direction lives on, and which ref folder describes it. */
const DIRECTIONS = {
  a: { route: "/consult-ledger", refs: "public/design/a/refs" },
  b: { route: "/decision-atlas", refs: "public/design/b/refs" },
};

/** Ref filenames are numbered; map the DOM id onto the number. */
const REF_NUMBERS = {
  "one-plan": "01-one-plan",
  "career-signal": "02-career-signal",
  "separate-rooms": "03-separate-rooms",
  "blueprint-rounds": "04-blueprint-rounds",
  "five-decisions": "05-five-decisions",
  "white-coat-paths": "06-white-coat-paths",
  "accountable-planner": "07-accountable-planner",
  "next-decision": "08-next-decision",
};

const [dirKey, sectionId] = process.argv.slice(2);
const direction = DIRECTIONS[dirKey];
if (!direction || !REF_NUMBERS[sectionId]) {
  console.error("usage: node scripts/compare-to-ref.mjs <a|b> <section-id>");
  console.error("sections:", Object.keys(REF_NUMBERS).join(", "));
  process.exit(1);
}

const refPath = `${direction.refs}/${REF_NUMBERS[sectionId]}.png`;
if (!existsSync(refPath)) {
  console.error(`no reference frame at ${refPath}`);
  process.exit(1);
}
mkdirSync(OUT, { recursive: true });

const ref = PNG.sync.read(readFileSync(refPath));

/* The frames are drawn on a 1536-wide canvas, so render at 1536 to compare
   like for like rather than eyeballing across two different widths. */
const WIDTH = 1536;

const browser = await puppeteer.launch({
  executablePath: CHROMIUM,
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"],
});
const page = await browser.newPage();
await page.setViewport({ width: WIDTH, height: 1000 });
await page.goto(BASE + direction.route, { waitUntil: "networkidle0", timeout: 90000 });
await page.addStyleTag({
  content: `*,*::before,*::after{animation:none!important;transition:none!important}
  .va-reveal{opacity:1!important;transform:none!important}
  header{display:none!important}
  nextjs-portal,[data-nextjs-toast]{display:none!important}`,
});
await page.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 600) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 80));
  }
  window.scrollTo(0, 0);
  await new Promise((r) => setTimeout(r, 500));
});

const box = await page.evaluate((id) => {
  const el = document.getElementById(id);
  if (!el) return null;
  const r = el.getBoundingClientRect();
  return { top: Math.round(r.top + window.scrollY), height: Math.round(r.height) };
}, sectionId);
if (!box) {
  console.error(`#${sectionId} not found on ${direction.route}`);
  await browser.close();
  process.exit(1);
}

await page.setViewport({ width: WIDTH, height: Math.min(box.height, 2600) });
await page.evaluate((top) => window.scrollTo(0, top), box.top);
await new Promise((r) => setTimeout(r, 350));
const shotBuffer = await page.screenshot();
await browser.close();

const shot = PNG.sync.read(Buffer.from(shotBuffer));

/** Nearest-neighbour scale to a target width; good enough to compare layout. */
function scaleToWidth(src, width) {
  const height = Math.round((src.height * width) / src.width);
  const dst = new PNG({ width, height });
  for (let y = 0; y < height; y++) {
    const sy = Math.min(src.height - 1, Math.floor((y * src.height) / height));
    for (let x = 0; x < width; x++) {
      const sx = Math.min(src.width - 1, Math.floor((x * src.width) / width));
      const s = (sy * src.width + sx) << 2;
      const d = (y * width + x) << 2;
      dst.data[d] = src.data[s];
      dst.data[d + 1] = src.data[s + 1];
      dst.data[d + 2] = src.data[s + 2];
      dst.data[d + 3] = 255;
    }
  }
  return dst;
}

const GAP = 24;
const top = scaleToWidth(ref, WIDTH);
const bottom = scaleToWidth(shot, WIDTH);
const out = new PNG({ width: WIDTH, height: top.height + GAP + bottom.height });
out.data.fill(0);

function blit(src, offsetY) {
  for (let y = 0; y < src.height; y++) {
    const rowSrc = y * src.width << 2;
    const rowDst = ((y + offsetY) * out.width) << 2;
    src.data.copy(out.data, rowDst, rowSrc, rowSrc + (src.width << 2));
  }
}
blit(top, 0);
blit(bottom, top.height + GAP);

const outPath = `${OUT}/${dirKey}-${sectionId}.png`;
writeFileSync(outPath, PNG.sync.write(out));
console.log(`ref  ${ref.width}x${ref.height}`);
console.log(`mine ${shot.width}x${shot.height}`);
console.log(outPath);
