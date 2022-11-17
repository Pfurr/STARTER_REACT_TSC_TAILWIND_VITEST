module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    node: true,
    mocha: true,
    es6: true
  },
  plugins: ['@typescript-eslint', 'prettier', 'testing-library/react'],
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'testing-library/await-async-query': 'error',
    'testing-library/no-await-sync-query': 'error',
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-dom-import': 'off'
  }
}
