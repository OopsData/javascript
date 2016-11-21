module.exports = {
  rules: {
    // enforces getter/setter pairs in objects
    // 强制 getter 和 setter 在对象中成对出现
    'accessor-pairs': 'off',

    // enforces return statements in callbacks of array's methods
    // http://eslint.org/docs/rules/array-callback-return
    //强制数组方法的回调函数中有 return 语句
    'array-callback-return': 'error',

    // treat var statements as if they were block scoped
    // 强制把变量的使用限制在其定义的作用域范围内
    'block-scoped-var': 'error',

    // specify the maximum cyclomatic complexity allowed in a program
    // 指定程序中允许的最大环路复杂度
    complexity: ['off', 11],

    // enforce that class methods use "this"
    // http://eslint.org/docs/rules/class-methods-use-this
    // 强制类的方法使用“this”
    'class-methods-use-this': ['error', {
      exceptMethods: [],
    }],

    // require return statements to either always or never specify values
    // 要求 return 语句要么总是指定返回的值，要么不指定
    'consistent-return': 'error',

    // specify curly brace conventions for all control statements
    // 强制所有控制语句使用一致的括号风格
    curly: ['error', 'multi-line'],

    // require default case in switch statements
    // 要求 switch 语句中有 default 分支
    'default-case': ['error', { commentPattern: '^no default$' }],

    // encourages use of dot notation whenever possible
    // 强制在任何允许的时候使用点号
    'dot-notation': ['error', { allowKeywords: true }],

    // enforces consistent newlines before or after dots
    // http://eslint.org/docs/rules/dot-location
    // 强制在点号之前和之后一致的换行
    'dot-location': ['error', 'property'],

    // require the use of === and !==
    // http://eslint.org/docs/rules/eqeqeq
    // 要求使用 === 和 !==
    eqeqeq: ['error', 'allow-null'],

    // make sure for-in loops have an if statement
    // 要求 for-in 循环中有一个 if 语句
    'guard-for-in': 'error',

    // disallow the use of alert, confirm, and prompt
    //  禁用 alert、confirm 和 prompt
    'no-alert': 'warn',

    // disallow use of arguments.caller or arguments.callee
    // 禁用 arguments.caller 或 arguments.callee
    'no-caller': 'error',

    // disallow lexical declarations in case/default clauses
    // http://eslint.org/docs/rules/no-case-declarations.html
    // 不允许在 case 子句中使用词法声明
    'no-case-declarations': 'error',

    // disallow division operators explicitly at beginning of regular expression
    // http://eslint.org/docs/rules/no-div-regex
    // 禁止除法操作符显式的出现在正则表达式开始的位置
    'no-div-regex': 'off',

    // disallow else after a return in an if
    // 禁止 if 语句中有 return 之后有 else
    'no-else-return': 'error',

    // disallow empty functions, except for standalone funcs/arrows
    // http://eslint.org/docs/rules/no-empty-function
    // 禁止出现空函数
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],

    // disallow empty destructuring patterns
    // http://eslint.org/docs/rules/no-empty-pattern
    // 禁止使用空解构模式 
    'no-empty-pattern': 'error',

    // disallow comparisons to null without a type-checking operator
    // 禁止在没有类型检查操作符的情况下与 null 进行比较
    'no-eq-null': 'off',

    // disallow use of eval()
    // 禁用 eval()
    'no-eval': 'error',

    // disallow adding to native types
    // 禁止扩展原生类型
    'no-extend-native': 'error',

    // disallow unnecessary function binding
    // 禁止不必要的 .bind() 调用
    'no-extra-bind': 'error',

    // disallow Unnecessary Labels
    // http://eslint.org/docs/rules/no-extra-label
    // 禁用不必要的标签
    'no-extra-label': 'error',

    // disallow fallthrough of case statements
    //  禁止 case 语句落空 
    'no-fallthrough': 'error',

    // disallow the use of leading or trailing decimal points in numeric literals
    // 禁止数字字面量中使用前导和末尾小数点
    'no-floating-decimal': 'error',

    // disallow reassignments of native objects or read-only globals
    // http://eslint.org/docs/rules/no-global-assign
    // 
    'no-global-assign': ['error', { exceptions: [] }],
    // deprecated in favor of no-global-assign
    // 禁止对原生对象赋值
    'no-native-reassign': 'off',

    // disallow implicit type conversions
    // http://eslint.org/docs/rules/no-implicit-coercion
    // 禁止使用短符号进行类型转换
    'no-implicit-coercion': ['off', {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    }],

    // disallow var and named functions in global scope
    // http://eslint.org/docs/rules/no-implicit-globals
    // 禁止在全局范围内使用 var 和命名的 function 声明
    'no-implicit-globals': 'off',

    // disallow use of eval()-like methods
    //  禁止使用类似 eval() 的方法
    'no-implied-eval': 'error',

    // disallow this keywords outside of classes or class-like objects
    //  禁止 this 关键字出现在类和类对象之外
    'no-invalid-this': 'off',

    // disallow usage of __iterator__ property
    // 禁用 __iterator__ 属性
    'no-iterator': 'error',

    // disallow use of labels for anything other then loops and switches
    // 禁用标签语句
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // disallow unnecessary nested blocks
    // 禁用不必要的嵌套块
    'no-lone-blocks': 'error',

    // disallow creation of functions within loops
    // 禁止在循环中出现 function 声明和表达式
    'no-loop-func': 'error',

    // disallow magic numbers
    // http://eslint.org/docs/rules/no-magic-numbers
    // 禁用魔术数字
    'no-magic-numbers': ['off', {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],

    // disallow use of multiple spaces
    // 禁止使用多个空格 
    'no-multi-spaces': 'error',

    // disallow use of multiline strings
    // 禁止使用多行字符串
    'no-multi-str': 'error',

    // disallow use of new operator when not part of the assignment or comparison
    // 禁止在非赋值或条件语句中使用 new 操作符
    'no-new': 'error',

    // disallow use of new operator for Function object
    // 禁止对 Function 对象使用 new 操作符
    'no-new-func': 'error',

    // disallows creating new instances of String, Number, and Boolean
    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-new-wrappers': 'error',

    // disallow use of (old style) octal literals
    // 禁用八进制字面量 
    'no-octal': 'error',

    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    // 禁止在字符串中使用八进制转义序列
    'no-octal-escape': 'error',

    // disallow reassignment of function parameters
    // disallow parameter object manipulation
    // rule: http://eslint.org/docs/rules/no-param-reassign.html
    // 不允许对 function 的参数进行重新赋值
    'no-param-reassign': ['error', { props: true }],

    // disallow usage of __proto__ property
    // 禁用 __proto__ 属性
    'no-proto': 'error',

    // disallow declaring the same variable more then once
    // 禁止使用 var 多次声明同一变量 
    'no-redeclare': 'error',

    // disallow certain object properties
    // http://eslint.org/docs/rules/no-restricted-properties
    // 不限制属性？
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated,'
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }],

    // disallow use of assignment in return statement
    // 禁止在 return 语句中使用赋值语句
    'no-return-assign': 'error',

    // disallow use of `javascript:` urls.
    // 禁止使用 javascript: url
    'no-script-url': 'error',

    // disallow self assignment
    // http://eslint.org/docs/rules/no-self-assign
    // 禁止自我赋值 
    'no-self-assign': 'error',

    // disallow comparisons where both sides are exactly the same
    // 禁止自身比较
    'no-self-compare': 'error',

    // disallow use of comma operator
    // 禁用逗号操作符
    'no-sequences': 'error',

    // restrict what can be thrown as an exception
    // 禁止抛出非异常字面量
    'no-throw-literal': 'error',

    // disallow unmodified conditions of loops
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    // 禁用一成不变的循环条件
    'no-unmodified-loop-condition': 'off',

    // disallow usage of expressions in statement position
    // 禁止出现未使用过的表达式
    'no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
    }],

    // disallow unused labels
    // http://eslint.org/docs/rules/no-unused-labels
    //  禁用未使用过的标签 
    'no-unused-labels': 'error',

    // disallow unnecessary .call() and .apply()
    // 禁止不必要的 .call() 和 .apply()

    'no-useless-call': 'off',

    // disallow useless string concatenation
    // http://eslint.org/docs/rules/no-useless-concat
    // 禁止不必要的字符串字面量或模板字面量的连接
    'no-useless-concat': 'error',

    // disallow unnecessary string escaping
    // http://eslint.org/docs/rules/no-useless-escape
    // 禁用不必要的转义字符
    'no-useless-escape': 'error',

    // disallow use of void operator
    // http://eslint.org/docs/rules/no-void
    // 禁用 void 操作符
    'no-void': 'error',

    // disallow usage of configurable warning terms in comments: e.g. todo
    // 禁止在注释中使用特定的警告术语
    'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

    // disallow use of the with statement
    // 禁用 with 语句
    'no-with': 'error',

    // require use of the second argument for parseInt()
    // 强制在parseInt()使用基数参数
    radix: 'error',

    // requires to declare all vars on top of their containing scope
    // 要求所有的 var 声明出现在它们所在的作用域顶部
    'vars-on-top': 'error',

    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife.html
    // 要求 IIFE 使用括号括起来
    'wrap-iife': ['error', 'outside'],

    // require or disallow Yoda conditions
    //  要求或禁止 “Yoda” 条件
    yoda: 'error'
  }
};
