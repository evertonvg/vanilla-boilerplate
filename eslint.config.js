import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import astro from 'eslint-plugin-astro'
import prettier from 'eslint-config-prettier'

export default [
    js.configs.recommended,

    ...tseslint.configs.recommended,

    ...astro.configs.recommended,

    {
        ignores: ['dist/', '.astro/', 'node_modules/'],
    },

    {
        files: ['**/*.{js,ts,astro}'],
        languageOptions: {
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        rules: {
            // Integra com Prettier
            'prettier/prettier': 'off',

            // Qualidade
            'no-unused-vars': 'warn',
            '@typescript-eslint/no-unused-vars': ['warn'],

            // Conveniência
            'no-console': 'off',
        },
    },
]
