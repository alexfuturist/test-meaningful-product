module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-curly-newline': ['error', 'consistent'],
  },
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
};
