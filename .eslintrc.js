module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs,mjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    project: "**/tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: ["**/*.js", "**/*.mjs"],
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
  },
};
