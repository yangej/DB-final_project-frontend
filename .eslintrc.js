module.exports = {
    parser: 'babel-eslint',

    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
    },

    rules: {
        'no-unused-vars': [
            'error',
            { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
        ],
    },
};
