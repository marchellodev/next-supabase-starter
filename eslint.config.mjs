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
    rules: {
      // Turn off unused variables warnings
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "off",
      
      // Turn off explicit any warnings
      "@typescript-eslint/no-explicit-any": "off",
      
      // Turn off React specific warnings
      "react/no-unescaped-entities": "off",
      "react/jsx-no-undef": "off",
      
      // Turn off import warnings
      "import/no-unresolved": "off",
      
      // Turn off other common strict rules
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/prefer-as-const": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "prefer-const": "off",
      "no-var": "off",
      "no-console": "off",
    }
  }
];

export default eslintConfig;

