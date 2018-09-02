module.exports = {
  extends: ['tierion/common', 'plugin:react/recommended'],
  plugins: ['react'],
  env: {
    jest: true,
    browser: true,
    node: false
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  }
}
