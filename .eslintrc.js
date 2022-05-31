module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "linebreak-style": "off",
    "quotes": "off",
    "quote-props": "off",
    "eol-last": "off",
    "no-useless-concat": "off",
    "no-console": "off",
    "no-restricted-syntax": "off",
    "comma-dangle": "off",
    "comma-spacing": "off",
    "object-curly-spacing": "off",
    "operator-linebreak": "off",
    "brace-style": "off",
    "no-param-reassign": "off",
    "max-len": "off",
    "block-spacing": "off",
    "no-use-before-define": "off",
    "no-unused-vars": "off",
    "no-restricted-globals": "off",
    "func-names": "off",
    "no-plusplus": "off",
    "prefer-const": "off",
    "key-spacing": "off"
  },
};
