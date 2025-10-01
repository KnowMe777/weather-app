import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
  js.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        fetch: 'readonly',
      },
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],

      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
        },
      ],
    },
  },
]);
