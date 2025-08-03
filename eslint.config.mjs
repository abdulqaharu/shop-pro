import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
})

const eslintConfig = [
  // Next.js + TypeScript rules
  ...compat.extends('eslint:recommended', 'next'),

  // ✅ Override for Prisma-generated code
  {
    files: ["lib/generated/**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
    },
    // rules: {
    //   "@typescript-eslint/no-unused-vars": "off",
    //   "@typescript-eslint/no-require-imports": "off",
    //   "@typescript-eslint/no-unused-expressions": "off",
    // },
  },
];

export default eslintConfig;
