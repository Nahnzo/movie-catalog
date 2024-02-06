module.exports = {
  env: { browser: true, es2020: true },
  extends: ["plugin:react/recommended", "plugin:react/jsx-runtime", "plugin:react-hooks/recommended"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "ulbi-tv-plugin", "import"],
  rules: {
    "ulbi-tv-plugin/path-checker": "error",
    "no-unused-vars": "warn",
    "react/prop-types": "off",
    "react-refresh/only-export-components": "warn",
    "react/display-name": "off",
  },
};
