module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 6,
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        },
    },
    plugins: ["ghost", "react", "jest"],
    extends: [
        "plugin:ghost/node",
        "plugin:react/recommended",
    ],
    settings: {
        react: {
            createClass: "createReactClass",
            pragma: "React",
            version: "16.0",
            flowVersion: "0.53",
        },
        propWrapperFunctions: ["forbidExtraProps"],
        jest: {
            "version": 26
        },
    },
    rules: {
        "ghost/sort-imports-es6-autofix/sort-imports-es6": "off",
        "ghost/ember/use-ember-get-and-set": "off",
        "no-console": "off",
        "no-inner-declarations": "off",
        "valid-jsdoc": "off",
        "require-jsdoc": "off",
        quotes: ["error", "double"],
        "consistent-return": ["error"],
        "arrow-body-style": [
            "error",
            "as-needed",
            { requireReturnForObjectLiteral: true },
        ],
        "jsx-quotes": ["error", "prefer-double"],
        semi: ["error", "never"],
        "object-curly-spacing": ["error", "always"],
        "comma-dangle": [
            "error",
            {
                arrays: "always-multiline",
                objects: "always-multiline",
                imports: "always-multiline",
                exports: "always-multiline",
                functions: "ignore",
            },
        ],
        "react/prop-types": [
            "error",
            {
                ignore: ["children"],
            },
        ],
    },
    env: {
        "jest/globals": true
    },
}
