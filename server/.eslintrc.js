module.exports = {
    env: {
        node: true,
    },
    extends: ['airbnb-base', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'no-console': 'off',
        'prettier/prettier': ['error'],
    },
};
