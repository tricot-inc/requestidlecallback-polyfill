module.exports = {
  extends: ['./node_modules/gts', 'plugin:@typescript-eslint/recommended'],
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'warn',
    '@typescript-eslint/ban-types': 'off',
    eqeqeq: [2, 'allow-null'],
    'node/no-unpublished-import': 'off',
    'node/no-unpublished-require': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
