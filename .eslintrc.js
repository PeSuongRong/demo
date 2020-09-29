module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:vue/strongly-recommended",
        "plugin:vue/recommended"

    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
        "allowImportExportEverywhere": true
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "vue/component-name-in-template-casing": "error"
    }
};
