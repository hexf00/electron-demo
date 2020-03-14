module.exports = {
  root: true,
  env: {
    node: true,
    // browser: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  globals: {
    "__static": true,
  },
  rules: {
    // 生产环境时不允许有console
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 函数名后面要有空格
    'space-before-function-paren': 'off',
    // 是否允许多行空白
    "no-multiple-empty-lines": "off"
  }
}
