import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
    {
        ignores: ['**/build/**','**/dist/**','**/coverage/**'],
    },
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                project: './tsconfig.json',
                sourceType: 'module',
                ecmaVersion: 'latest',
            },
            globals: {
                process: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': typescriptEslint,
        },
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            'semi': ['error', 'always'],
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
        },
    },
    {
        files: ['**/*.test.ts'],
        languageOptions: {
            globals: {
                jest: 'readonly',
                describe: 'readonly',
                it: 'readonly',
                expect: 'readonly',
            },
        },
    },
];
