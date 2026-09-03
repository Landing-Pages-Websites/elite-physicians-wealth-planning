/**
 * Refuse a default-distDir build while a dev server is running.
 *
 * `next dev` and `next build` both write to .next. Building into it while dev
 * is live replaces the dev server's output underneath it, and every subsequent
 * request throws "Cannot find module './124.js'" or "a[d] is not a function".
 * The site is fine; the dev server is destroyed. This happened twice, both
 * times because a plain `npm run build` was run out of habit.
 *
 * Use `npm run verify:all`, which builds and serves from .next-verify.
 * If you genuinely want a production build, stop the dev server first.
 */
import { execSync } from "node:child_process";

// Building into a different directory cannot collide with dev.
if (process.env.NEXT_DIST_DIR) process.exit(0);

let running = "";
try {
  running = execSync("pgrep -fl 'next dev' || true", { encoding: "utf8" }).trim();
} catch {
  process.exit(0); // pgrep unavailable — never block the build over the guard
}

if (running) {
  console.error(
    "\n  BUILD BLOCKED — a dev server is running, and this build targets .next,\n" +
      "  which is the directory that dev server is serving from. Building into it\n" +
      "  breaks the dev server until .next is deleted and dev is restarted.\n\n" +
      `  running: ${running.split("\n")[0]}\n\n` +
      "  Use:  npm run verify:all     (builds and serves from .next-verify)\n" +
      "  Or:   stop the dev server, then npm run build\n"
  );
  process.exit(1);
}
