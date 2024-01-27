module.exports = {
  extends: ['stylelint-stylus/standard', 'stylelint-config-standard-scss', 'stylelint-config-css-modules'],
  rules: {
    'import-notation': 'string',
    'custom-property-empty-line-before': null,
    'rule-empty-line-before': ['always-multi-line'],
    'selector-class-pattern': '^[a-zA-Z][a-zA-Z0-9]*(-[a-z0-9]+)*(__[a-z0-9-]+)?(--[a-z0-9-]+)?$',
    'scss/at-import-partial-extension': ['always', { except: ['scss'] }],
    'declaration-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment', 'after-declaration'],
      },
    ],
  },
  ignoreFiles: ['.next/**/*'],
};
