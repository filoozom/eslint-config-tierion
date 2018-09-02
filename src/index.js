const mocha = require('./rules/mocha')
const prettier = require('./rules/prettier')
const style = require('./rules/style')

module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'mocha'],
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    ...mocha,
    ...prettier,
    ...style
  }
}
