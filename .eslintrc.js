module.exports = {
  root: true,

  extends: ['@metamask/eslint-config'],

  overrides: [
    {
      files: ['*.ts'],
      extends: ['@metamask/eslint-config-typescript'],
    },

    {
      files: ['*.js'],
      parserOptions: {
        sourceType: 'script',
      },
      extends: ['@metamask/eslint-config-nodejs'],
    },
  ],

  ignorePatterns: [
    '!.eslintrc.js',
    '!.prettierrc.js',
    'dist/',
    'next-env.d.ts',
  ],
};
