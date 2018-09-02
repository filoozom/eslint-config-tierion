module.exports = {
  extends: [
    // External
    'eslint:recommended',
    'plugin:prettier/recommended',

    // Internal
    'tierion/common/mocha',
    'tierion/common/prettier',
    'tierion/common/style'
  ],
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018
  }
}
