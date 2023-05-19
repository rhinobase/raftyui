/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ["next", "turbo", "prettier"],
  ignorePatterns: ["node_modules", "dist"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
