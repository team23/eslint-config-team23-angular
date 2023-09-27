module.exports = {
    overrides: [
        {
            'files': [
                '*.ts',
                '*.tsx',
                '*.js',
                '*.jsx',
            ],
            'parserOptions': {
                'project': ['tsconfig.?*.json'],
                'createDefaultProgram': true,
            },
            'extends': [
                'plugin:@angular-eslint/recommended',
                'plugin:@angular-eslint/template/process-inline-templates',
            ],
            'rules': {
                '@angular-eslint/no-forward-ref': 'off',
                '@angular-eslint/component-class-suffix': [
                    'error',
                    {
                        'suffixes': [
                            'Component',
                            'View',
                        ],
                    },
                ],
                '@angular-eslint/component-max-inline-declarations': 'error',
                '@angular-eslint/component-selector': 'error',
                '@angular-eslint/contextual-lifecycle': 'error',
                '@angular-eslint/directive-class-suffix': [
                    'error',
                    {
                        'suffixes': [
                            'Directive',
                        ],
                    },
                ],
                '@angular-eslint/directive-selector': 'error',
                '@angular-eslint/no-attribute-decorator': 'error',
                '@angular-eslint/no-conflicting-lifecycle': 'error',
                '@angular-eslint/no-host-metadata-property': 'error',
                '@angular-eslint/no-input-prefix': 'error',
                '@angular-eslint/no-input-rename': 'error',
                '@angular-eslint/no-inputs-metadata-property': 'error',
                '@angular-eslint/no-lifecycle-call': 'error',
                '@angular-eslint/no-output-native': 'error',
                '@angular-eslint/no-output-on-prefix': 'error',
                '@angular-eslint/no-output-rename': 'error',
                '@angular-eslint/no-outputs-metadata-property': 'error',
                '@angular-eslint/no-pipe-impure': 'error',
                '@angular-eslint/no-queries-metadata-property': 'error',
                '@angular-eslint/prefer-on-push-component-change-detection': 'error',
                '@angular-eslint/prefer-output-readonly': 'error',
                '@angular-eslint/use-component-selector': 'error',
                '@angular-eslint/use-component-view-encapsulation': 'error',
                '@angular-eslint/use-lifecycle-interface': 'error',
                '@angular-eslint/use-pipe-transform-interface': 'error',
            },
        },
        {
            'files': [
                '*.html',
            ],
            'extends': [
                'plugin:@angular-eslint/template/recommended',
            ],
            'rules': {
                '@angular-eslint/template/i18n': 'off',
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
                '@angular-eslint/template/mouse-events-have-key-events': 'error',
                '@angular-eslint/template/click-events-have-key-events': 'error',
                '@angular-eslint/template/alt-text': 'error',
                '@angular-eslint/template/elements-content': 'error',
                '@angular-eslint/template/interactive-supports-focus': 'error',
                '@angular-eslint/template/label-has-associated-control': 'error',
                '@angular-eslint/template/role-has-required-aria': 'error',
                '@angular-eslint/template/table-scope': 'error',
                '@angular-eslint/template/valid-aria': 'error',
            },
        },
    ],
};
