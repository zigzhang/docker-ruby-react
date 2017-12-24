module.exports = {
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parser": "babel-eslint",
    "rules": {
        // Allow the use of console for Warning and Error
        "no-console": ["error", {"allow": ["warn", "error"]}]
    },
    // Define browser object such as document, console etc.
    "env": {
        "browser": true
    }
};
