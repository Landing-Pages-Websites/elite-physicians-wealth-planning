/**
 * Refuse a default-distDir build while a LOCAL dev server is running.
 *
 * `next dev` and `next build` both write to .next. Building into it while dev
 * is live replaces the dev server's output underneath it, and every subsequent
 * request throws "Cannot find module './124.js'" or "a[d] is not a function".
 *
 * THIS GUARD MUST FAIL OPEN. An earlier version did not, and broke the Vercel
 * production deploy: `execSync` spawns `sh -c "pgrep -f 'next dev'"`, that
 * shell's own command line contains the string "next dev", and on Linux pgrep
 * matched it — so every CI build blocked itself with "running: 372 sh".
 *
 * Three defences, in order:
 *   1. Never run in CI at all.
 *   2. Match with a bracket pattern so the regex cannot match the command that
 *      contains it (the classic `ps | grep [n]ame` trick).
 *   3. Ignore this process's own tree, and require the match to look like a
 *      real next binary invocation.
 * Anything unexpected exits 0. A guard that can block a deploy is worse than
 * the bug it prevents.
 */
import { execSync } from "node:child_process";

const skip = (why) => {
  if (process.env.DEBUG_BUILD_GUARD) console.error(`build guard skipped: ${why}`);
  process.exit(0);
};

// 1. CI, or any build already targeting another directory, is never at risk.
if (process.env.CI) skip("CI");
if (process.env.VERCEL || process.env.VERCEL_ENV) skip("Vercel");
if (process.env.GITHUB_ACTIONS || process.env.NETLIFY) skip("CI provider");
if (process.env.NEXT_DIST_DIR) skip("NEXT_DIST_DIR set");

let lines = [];
try {
  // 2. `next[ ]dev` matches the string "next dev" but NOT the literal text
  //    "next[ ]dev" sitting in this command's own shell cmdline.
  const out = execSync("pgrep -fl 'next[ ]dev' 2>/dev/null || true", {
    encoding: "utf8",
    timeout: 5000,
  });
  lines = out.split("\n").map((l) => l.trim()).filter(Boolean);
} catch {
  skip("pgrep unavailable");
}

// 3. Drop our own process tree, and anything that is not a real next binary.
const mine = new Set([String(process.pid), String(process.ppid)]);
const dev = lines.filter((l) => {
  const [pid, ...rest] = l.split(/\s+/);
  const cmd = rest.join(" ");
  if (mine.has(pid)) return false;
  if (/pgrep|guard-build/.test(cmd)) return false;
  return /(^|[/\s])next(\.js)?\s+dev(\s|$)/.test(cmd) || /node_modules\/\.bin\/next dev/.test(cmd);
});

if (dev.length === 0) process.exit(0);

console.error(
  "\n  BUILD BLOCKED — a dev server is running, and this build targets .next,\n" +
    "  which is the directory that dev server is serving from. Building into it\n" +
    "  breaks the dev server until .next is deleted and dev is restarted.\n\n" +
    `  running: ${dev[0]}\n\n` +
    "  Use:  npm run verify:all     (builds and serves from .next-verify)\n" +
    "  Or:   stop the dev server, then npm run build\n"
);
process.exit(1);
