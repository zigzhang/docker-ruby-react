module.exports = {
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parser": "babel-eslint",
    "rules": {
        // Allow the use of console for Warning and Error
        "no-console": ["error", {"allow": ["warn", "error"]}]
    },
    // Allow the use of document, console etc.
    "env": {
        "browser": true
    }
};
