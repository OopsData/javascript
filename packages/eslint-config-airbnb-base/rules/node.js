module.exports = {
  env: {
    node: true
  },

  rules: {
    // enforce return after a callback
    // 强制数组方法的回调函数中有 return 语句
    'callback-return': 'off',

    // require all requires be top-level
    // http://eslint.org/docs/rules/global-require
    //要求 require() 出现在顶层模块作用域中
    'global-require': 'error',

    // enforces error handling in callbacks (node environment)
    //要求回调函数中有容错处理
    'handle-callback-err': 'off',

    // disallow mixing regular variable and require declarations
    //禁止混合常规 var 声明和 require 调用
    'no-mixed-requires': ['off', false],

    // disallow use of new operator with the require function
    // 禁止调用 require 时使用 new 操作符
    'no-new-require': 'error',

    // disallow string concatenation with __dirname and __filename
    // http://eslint.org/docs/rules/no-path-concat
    // 禁止对 __dirname 和 __filename进行字符串连接
    'no-path-concat': 'error',

    // disallow use of process.env
    //禁用 process.env
    'no-process-env': 'off',

    // disallow process.exit()
    //禁用 process.exit()
    'no-process-exit': 'off',

    // restrict usage of specified node modules
    // 禁用指定的通过 require 加载的模块
    'no-restricted-modules': 'off',

    // disallow use of synchronous methods (off by default)
    // 禁用同步方法
    'no-sync': 'off',
  }
};