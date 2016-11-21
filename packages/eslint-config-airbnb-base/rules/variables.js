module.exports = {
  rules: {
    // enforce or disallow variable initializations at definition
    // 要求或禁止 var 声明中的初始化
    'init-declarations': 'off',

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    // 不允许 catch 子句的参数与外层作用域中的变量同名
    'no-catch-shadow': 'off',

    // disallow deletion of variables
    // 禁止删除变量
    'no-delete-var': 'error',

    // disallow labels that share a name with a variable
    // http://eslint.org/docs/rules/no-label-var
    // 不允许标签与变量同名
    'no-label-var': 'error',

    // disallow specific globals
    // 禁用特定的全局变量
    'no-restricted-globals': 'off',

    // disallow declaration of variables already declared in the outer scope
    // 禁止 var 声明 与外层作用域的变量同名
    'no-shadow': 'error',

    // disallow shadowing of names such as arguments
    // 禁止覆盖受限制的标识符
    'no-shadow-restricted-names': 'error',

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': 'error',

    // disallow use of undefined when initializing variables
    // 禁止将变量初始化为 undefined
    'no-undef-init': 'error',

    // disallow use of undefined variable
    // http://eslint.org/docs/rules/no-undefined
    // TODO: enable?
    // 禁止将 undefined 作为标识符
    'no-undefined': 'off',

    // disallow declaration of variables that are not used in the code
    // 禁止出现未使用过的变量 
    'no-unused-vars': ['error', { vars: 'local', args: 'after-used' }],

    // disallow use of variables before they are defined
    // 不允许在变量定义之前使用它们
    'no-use-before-define': 'error'
  }
};