import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Разрешаем пустые фрагменты для удобства (например, для обёрток)
      "react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],
      // Предупреждение вместо ошибки для неиспользуемых переменных (часто в деструктуризации)
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "dist/**",
    "next-env.d.ts",
    "node_modules/**",
  ]),
])

export default eslintConfig
