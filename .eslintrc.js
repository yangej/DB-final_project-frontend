module.exports = {
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
