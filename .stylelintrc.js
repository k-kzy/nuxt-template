module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-order', 'stylelint-prettier', 'stylelint-scss'],
  rules: {
    'prettier/prettier': true,
    'order/properties-alphabetical-order': true,
    'at-rule-no-unknown': null,
    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'declaration-block-no-duplicate-properties': true,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['use', 'forward'],
      },
    ],
  },
}
