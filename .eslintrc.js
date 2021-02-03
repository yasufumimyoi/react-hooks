module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  settings: {
    react: {
      version: '999.999.999',
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'react/prop-types': 'off',
    'no-console': 'warn',
    'no-var': 'error',
  },
};
