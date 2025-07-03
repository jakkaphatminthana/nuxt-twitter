// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

// @ts-ignore
export default withNuxt({
  languageOptions: {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      extraFileExtensions: ['.vue'],
      project: ['./tsconfig.json'],
    },
  },
});
