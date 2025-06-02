const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const tsParser = require("@typescript-eslint/parser");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const globals = require("globals");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        parser: tsParser,

        globals: {
            ...globals.browser,
            ...globals.node,
            process: "readable",
            global: "readable",
            console: "readable",
            setTimeout: "readable",
            clearTimeout: "readable",
            module: "writable",
        },

        ecmaVersion: 6,
        sourceType: "module",
        parserOptions: {},
    },

    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    extends: "eslint:recommended",

    rules: {
        "no-fallthrough": "off",
        "no-constant-condition": "off",
        curly: "error",
        "getter-return": "off",
        "no-console": "off",
        "no-var": "error",
        "no-undef": "off",
        "no-extra-semi": "off",
        "no-unused-vars": "off",
        "no-redeclare": "off",
        "require-yield": "off",
    },
}, globalIgnores(["**/__tests__/**/*"])]);
