/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    project: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

module.exports = config;
