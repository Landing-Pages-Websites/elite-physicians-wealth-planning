import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // `.next*` rather than `.next`: verification builds use .next-verify,
    // and without the glob eslint lints the compiled output.
    ignores: ["node_modules/**", ".next*/**", "out/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
