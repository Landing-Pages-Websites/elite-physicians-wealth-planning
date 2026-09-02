/**
 * Palette + typography gate.
 *
 * Two rules, both derived from the build contract rather than taste:
 *   1. Every colour in src/ is either a palette_contract token or a derived
 *      shade documented in globals.css @theme. A bare hex literal in a
 *      component is a defect — it is a colour nobody can audit.
 *   2. No font family outside typography_contract (Cormorant Garamond, Inter).
 *
 * Run: npm run check:palette
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const SRC = "src";
const GLOBALS = "src/app/globals.css";
const CONTRACT = "public/design/a/palette_contract.json";
const HEX = /#[0-9a-fA-F]{6}\b/g;

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if ([".ts", ".tsx", ".css"].includes(extname(p))) out.push(p);
  }
  return out;
}

/** Strip comments so documentation of a colour is not mistaken for its use. */
function stripComments(text) {
  return text.replace(/\/\*[\s\S]*?\*\//g, " ").replace(/\/\/[^\n]*/g, " ");
}

const contract = JSON.parse(readFileSync(CONTRACT, "utf8"));
const contractHexes = new Set(
  Object.values(contract.tokens).map((t) => t.hex.toLowerCase())
);
const documented = new Set(
  [...readFileSync(GLOBALS, "utf8").matchAll(/--color-[a-z-]+:\s*(#[0-9a-f]{6})/gi)].map(
    (m) => m[1].toLowerCase()
  )
);
const allowed = new Set([...contractHexes, ...documented, "#ffffff", "#000000"]);

const failures = [];

for (const file of walk(SRC)) {
  const body = stripComments(readFileSync(file, "utf8"));
  const isGlobals = file.endsWith("globals.css");

  for (const [index, line] of body.split("\n").entries()) {
    for (const hex of line.match(HEX) ?? []) {
      const h = hex.toLowerCase();
      if (!allowed.has(h)) {
        failures.push(`${file}:${index + 1} off-palette ${hex}`);
      } else if (!isGlobals && h !== "#ffffff" && h !== "#000000") {
        failures.push(
          `${file}:${index + 1} bare literal ${hex} — use its token instead`
        );
      }
    }
  }

  const family = body.match(/font-family:\s*([^;]+)/g) ?? [];
  for (const decl of family) {
    if (!/cormorant|inter|var\(--font|inherit/i.test(decl)) {
      failures.push(`${file} off-contract ${decl.trim()}`);
    }
  }
}

if (failures.length) {
  console.error("PALETTE GATE FAILED\n" + failures.map((f) => `  ${f}`).join("\n"));
  process.exit(1);
}
console.log(
  `palette gate passed — ${contractHexes.size} contract tokens, ` +
    `${documented.size - contractHexes.size} documented derived shades, 0 bare literals`
);
