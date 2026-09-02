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
// 3-, 4-, 6- and 8-digit forms. The 6-only version passed #f0f and #ff00ffcc.
const HEX = /#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})\b/g;
// Raw colour functions are colours too — site.css is largely built from rgba().
const FUNC = /\b(?:rgba?|hsla?|color-mix|oklch|lab)\(/g;

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if ([".ts", ".tsx", ".css"].includes(extname(p))) out.push(p);
  }
  return out;
}

/**
 * Blank out comments so documenting a colour is not mistaken for using one,
 * preserving newlines so reported line numbers stay true. Line comments are
 * only stripped from TS/TSX — "//" is not a comment in CSS, and stripping it
 * mangles every https:// URL.
 */
function stripComments(text, isScript) {
  const blanked = text.replace(/\/\*[\s\S]*?\*\//g, (m) =>
    m.replace(/[^\n]/g, " ")
  );
  return isScript ? blanked.replace(/\/\/[^\n]*/g, (m) => " ".repeat(m.length)) : blanked;
}

let contract;
try {
  contract = JSON.parse(readFileSync(CONTRACT, "utf8"));
} catch (error) {
  console.error(
    `PALETTE GATE could not read the palette contract at ${CONTRACT}: ${error.message}`
  );
  process.exit(1);
}
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
  const isScript = [".ts", ".tsx"].includes(extname(file));
  const body = stripComments(readFileSync(file, "utf8"), isScript);
  const isGlobals = file.endsWith("globals.css");
  const isStylesheet = extname(file) === ".css";

  for (const [index, line] of body.split("\n").entries()) {
    // Raw colour functions bypass the token system entirely. site.css is
    // allowed them (its depth recipes predate this gate and are tracked in the
    // ledger); components are not.
    if (!isStylesheet && FUNC.test(line)) {
      failures.push(
        `${file}:${index + 1} raw colour function — use a token or a /* documented */ stylesheet rule`
      );
    }
    FUNC.lastIndex = 0;

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

  // Check the families named in the stack, not a substring of the whole
  // declaration — the loose test passed `font-family: "Winterlude", cursive`.
  const ALLOWED_FAMILY =
    /^(cormorant garamond|inter|georgia|times new roman|serif|arial|helvetica|sans-serif|ui-monospace|monospace|inherit|initial|unset)$/i;
  for (const decl of body.match(/font-family:\s*([^;}]+)/g) ?? []) {
    const stack = decl.replace(/font-family:\s*/i, "");
    if (/var\(--font/i.test(stack)) continue;
    for (const family of stack.split(",")) {
      const name = family.trim().replace(/^["']|["']$/g, "");
      if (name && !ALLOWED_FAMILY.test(name)) {
        failures.push(`${file} off-contract font family "${name}"`);
      }
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
