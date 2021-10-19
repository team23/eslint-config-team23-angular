module.exports = {
    env: {
        'browser': true,
        'es2021': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        'ecmaVersion': 13,
        'sourceType': 'module',
    },
    plugins: ['@typescript-eslint'],
    overrides: [
        {
            'files': [
                '*.html',
            ],
            'rules': {
                '@angular-eslint/template/i18n': 'off',
                '@angular-eslint/template/click-events-have-key-events': 'off',
                '@angular-eslint/template/mouse-events-have-key-events': 'off',
                '@angular-eslint/template/no-positive-tabindex': 'error',
                '@angular-eslint/template/banana-in-box': 'error',
                '@angular-eslint/template/no-any': 'error',
                '@angular-eslint/template/no-autofocus': 'error',
                '@angular-eslint/template/no-distracting-elements': 'error',
                '@angular-eslint/template/no-negated-async': 'error',
                '@angular-eslint/template/conditional-complexity': 'error',
                '@angular-eslint/template/cyclomatic-complexity': 'error',
                '@angular-eslint/template/no-call-expression': 'error',
                '@angular-eslint/template/use-track-by-function': 'error',
            },
        },
    ],
};
