module.exports = {
  root: true,
  env: {
    node: true
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
    __static: true
  },
  rules: {
    // 生产环境时不允许有console
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 函数名后面要有空格
    'space-before-function-paren': 'off',
    // 是否允许多行空白
    'no-multiple-empty-lines': 'off',
    // 存在没有被捕获的catch
    'no-useless-catch': 'off',
    // 结尾不检查分号
    semi: ['error', 'never'],
    // any
    '@typescript-eslint/no-explicit-any': 'off',
    // 引入了未使用的变量
    '@typescript-eslint/no-unused-vars': 'off',

    // 强制使用一致的反勾号、双引号或单引号
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
  }
}
