module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    quotes: ["error", "double"],
    indent: ["error", 4],
    "import/no-commonjs": "off",
    "linebreak-style": ["off"]
  },
};
