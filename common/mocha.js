module.exports = {
  plugins: ['mocha'],
  rules: {
    'mocha/no-exclusive-tests': 'error',
    'mocha/prefer-arrow-callback': 'error',
    'mocha/handle-done-callback': 'error'
  }
}
