module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "vue/multi-word-component-names": "off",
  },
};
