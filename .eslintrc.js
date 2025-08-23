module.exports = {
  // ...existing config...
  overrides: [
    {
      files: ["tailwind.config.js", "postcss.config.js"],
      rules: {
        "import/no-commonjs": "off",
        "global-require": "off",
      },
    },
  ],
};
