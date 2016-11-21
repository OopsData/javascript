module.exports = {
  rules: {
    // enforce spacing inside array brackets
    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing': ['error', 'never'],

    // enforce spacing inside single-line blocks
    // http://eslint.org/docs/rules/block-spacing
    // 强制在单行代码块中使用一致的空格
    'block-spacing': ['error', 'always'],

    // enforce one true brace style
    // 强制在代码块中使用一致的大括号风格
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // require camel case names
    // 强制使用骆驼拼写法命名约定
    camelcase: ['error', { properties: 'never' }],

    // enforce spacing before and after comma
    // 强制在逗号前后使用一致的空格
    'comma-spacing': ['error', { before: false, after: true }],

    // enforce one true comma style
    // 强制使用一致的逗号风格
    'comma-style': ['error', 'last'],

    // disallow padding inside computed properties
    // 强制在计算的属性的方括号中使用一致的空格
    'computed-property-spacing': ['error', 'never'],

    // enforces consistent naming when capturing the current execution context
    // 当获取当前执行环境的上下文时，强制使用一致的命名
    'consistent-this': 'off',

    // enforce newline at the end of file, with no multiple empty lines
    // 强制文件末尾至少保留一行空行
    'eol-last': ['error', 'always'],

    // enforce spacing between functions and their invocations
    // http://eslint.org/docs/rules/func-call-spacing
    'func-call-spacing': ['error', 'never'],

    // require function expressions to have a name
    // 强制使用命名的 function 表达式
    'func-names': 'warn',

    // enforces use of function declarations or expressions
    // http://eslint.org/docs/rules/func-style
    // TODO: enable
    // 强制一致地使用函数声明或函数表达式
    'func-style': ['off', 'expression'],

    // Blacklist certain identifiers to prevent them being used
    // http://eslint.org/docs/rules/id-blacklist
    // 禁止使用指定的标识符
    'id-blacklist': 'off',

    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    //  强制标识符的最新和最大长度
    'id-length': 'off',

    // require identifiers to match the provided regular expression
    // 要求标识符匹配一个指定的正则表达式
    'id-match': 'off',

    // this option sets a specific tab width for your code
    // http://eslint.org/docs/rules/indent
    // 强制使用一致的缩进
    indent: ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],

    // specify whether double or single quotes should be used in JSX attributes
    // http://eslint.org/docs/rules/jsx-quotes
    // 强制在 JSX 属性中一致地使用双引号或单引号 
    'jsx-quotes': ['off', 'prefer-double'],

    // enforces spacing between keys and values in object literal properties
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // require a space before & after certain keywords
    // 强制在关键字前后使用一致的空格
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],

    // enforce position of line comments
    // http://eslint.org/docs/rules/line-comment-position
    // TODO: enable?
    // 
    'line-comment-position': ['off', {
      position: 'above',
      ignorePattern: '',
      applyDefaultPatterns: true,
    }],

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    // http://eslint.org/docs/rules/linebreak-style
    //  强制使用一致的换行风格 
    'linebreak-style': ['error', 'unix'],

    // enforces empty lines around comments
    // 要求在注释周围有空行
    'lines-around-comment': 'off',

    // require or disallow newlines around directives
    // http://eslint.org/docs/rules/lines-around-directive
    // 要求或不允许 在指令旁与新行
    'lines-around-directive': ['error', {
      before: 'always',
      after: 'always',
    }],

    // specify the maximum depth that blocks can be nested
    // 强制可嵌套的块的最大深度
    'max-depth': ['off', 4],

    // specify the maximum length of a line in your program
    // http://eslint.org/docs/rules/max-len
    // 强制一行的最大长度
    'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // specify the max number of lines in a file
    // http://eslint.org/docs/rules/max-lines
    // 强制最大行数
    'max-lines': ['off', {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    }],

    // specify the maximum depth callbacks can be nested
    // 强制回调函数最大嵌套深度
    'max-nested-callbacks': 'off',

    // limits the number of parameters that can be used in the function declaration.
    // 定义中最多允许的参数数量
    'max-params': ['off', 3],

    // specify the maximum number of statement allowed in a function
    // 强制 function 块最多允许的的语句数量
    'max-statements': ['off', 10],

    // restrict the number of statements per line
    // http://eslint.org/docs/rules/max-statements-per-line
    // 强制每一行中所允许的最大语句数量
    'max-statements-per-line': ['off', { max: 1 }],

    // require multiline ternary
    // http://eslint.org/docs/rules/multiline-ternary
    // TODO: enable?
    // 要求多行三元表达式
    'multiline-ternary': ['off', 'never'],

    // require a capital letter for constructors
    //  要求构造函数首字母大写
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],

    // disallow the omission of parentheses when invoking a constructor with no arguments
    // http://eslint.org/docs/rules/new-parens
    // 要求调用无参构造函数时有圆括号
    'new-parens': 'error',

    // allow/disallow an empty newline after var statement
    // 要求或禁止 var 声明语句后有一行空行
    'newline-after-var': 'off',

    // http://eslint.org/docs/rules/newline-before-return
    // 要求 return 语句之前有一空行
    'newline-before-return': 'off',

    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // http://eslint.org/docs/rules/newline-per-chained-call
    // 要求方法链中每个调用都有一个换行符
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // disallow use of the Array constructor
    // 禁止使用 Array 构造函数
    'no-array-constructor': 'error',

    // disallow use of bitwise operators
    // http://eslint.org/docs/rules/no-bitwise
    // 禁用按位运算符
    'no-bitwise': 'error',

    // disallow use of the continue statement
    // http://eslint.org/docs/rules/no-continue
    // 禁用 continue 语句
    'no-continue': 'error',

    // disallow comments inline after code
    // 禁止在代码行后使用内联注释
    'no-inline-comments': 'off',

    // disallow if as the only statement in an else block
    // http://eslint.org/docs/rules/no-lonely-if
    // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-lonely-if': 'error',

    // disallow un-paren'd mixes of different operators
    // http://eslint.org/docs/rules/no-mixed-operators
    // 禁止混合使用不同的操作符
    'no-mixed-operators': ['error', {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }],

    // disallow mixed spaces and tabs for indentation
    // 不允许空格和 tab 混合缩进 
    'no-mixed-spaces-and-tabs': 'error',

    // disallow multiple empty lines and only one newline at the end
    // 不允许多个空行
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],

    // disallow negated conditions
    // http://eslint.org/docs/rules/no-negated-condition
    // 不允许否定的表达式
    'no-negated-condition': 'off',

    // disallow nested ternary expressions
    // 不允许使用嵌套的三元表达式
    'no-nested-ternary': 'error',

    // disallow use of the Object constructor
    // 禁止使用 Object 的构造函数
    'no-new-object': 'error',

    // disallow use of unary operators, ++ and --
    // http://eslint.org/docs/rules/no-plusplus
    // 禁止使用一元操作符 ++ 和 --
    'no-plusplus': 'error',

    // disallow certain syntax forms
    // http://eslint.org/docs/rules/no-restricted-syntax
    // 禁止使用特定的语法
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],

    // disallow space between function identifier and application
    // 禁止 function 标识符和括号之间出现空格
    'no-spaced-func': 'error',

    // disallow tab characters entirely
    // 不允许使用tabs操作符
    'no-tabs': 'error',

    // disallow the use of ternary operators
    // 不允许使用三元操作符
    'no-ternary': 'off',

    // disallow trailing whitespace at the end of lines
    // 禁用行尾空格
    'no-trailing-spaces': 'error',

    // disallow dangling underscores in identifiers
    // 禁止标识符中有悬空下划线
    'no-underscore-dangle': ['error', { allowAfterThis: false }],

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // http://eslint.org/docs/rules/no-unneeded-ternary
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // disallow whitespace before properties
    // http://eslint.org/docs/rules/no-whitespace-before-property
    // 禁止属性前有空白
    'no-whitespace-before-property': 'error',

    // require padding inside curly braces
    // 强制在花括号中使用一致的空格
    'object-curly-spacing': ['error', 'always'],

    // enforce line breaks between braces
    // http://eslint.org/docs/rules/object-curly-newline
    // TODO: enable once https://github.com/eslint/eslint/issues/6488 is resolved
    // 强制花括号内换行符的一致性
    'object-curly-newline': ['off', {
      ObjectExpression: { minProperties: 0, multiline: true },
      ObjectPattern: { minProperties: 0, multiline: true }
    }],

    // enforce "same line" or "multiple line" on object properties.
    // http://eslint.org/docs/rules/object-property-newline
    // 强制将对象的属性放在不同的行上
    'object-property-newline': ['error', {
      allowMultiplePropertiesPerLine: true,
    }],

    // allow just one var statement per function
    // 强制函数中的变量要么一起声明要么分开声明
    'one-var': ['error', 'never'],

    // require a newline around variable declaration
    // http://eslint.org/docs/rules/one-var-declaration-per-line
    // 要求或禁止在 var 声明周围换行
    'one-var-declaration-per-line': ['error', 'always'],

    // require assignment operator shorthand where possible or prohibit it entirely
    // http://eslint.org/docs/rules/operator-assignment
    // 要求或禁止在可能的情况下要求使用简化的赋值操作符
    'operator-assignment': ['error', 'always'],

    // enforce operators to be placed before or after line breaks
    // 强制操作符使用一致的换行符
    'operator-linebreak': 'off',

    // enforce padding within blocks
    // 要求或禁止块内填充
    'padded-blocks': ['error', 'never'],

    // require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props.html
    // 要求对象字面量属性名称用引号括起来
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    // specify whether double or single quotes should be used
    // 强制使用一致的反勾号、双引号或单引号
    quotes: ['error', 'single', { avoidEscape: true }],

    // do not require jsdoc
    // http://eslint.org/docs/rules/require-jsdoc
    // 要求使用 JSDoc 注释
    'require-jsdoc': 'off',

    // require or disallow use of semicolons instead of ASI
    // 要求或禁止使用分号而不是 ASI
    semi: ['error', 'always'],

    // enforce spacing before and after semicolons
    // 强制分号之前和之后使用一致的空格
    'semi-spacing': ['error', { before: false, after: true }],

    // requires object keys to be sorted
    // 要求同一个声明块中的key按顺序排列
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

    // sort variables within the same declaration block
    // 要求同一个声明块中的变量按顺序排列
    'sort-vars': 'off',

    // require or disallow space before blocks
    //  强制在块之前使用一致的空格
    'space-before-blocks': 'error',

    // require or disallow space before function opening parenthesis
    // http://eslint.org/docs/rules/space-before-function-paren
    // 强制在 function的左括号之前使用一致的空格 
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never' }],

    // require or disallow spaces inside parentheses
    // 强制在圆括号内使用一致的空格
    'space-in-parens': ['error', 'never'],

    // require spaces around operators
    // 要求操作符周围有空格
    'space-infix-ops': 'error',

    // Require or disallow spaces before/after unary operators
    // http://eslint.org/docs/rules/space-unary-ops
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
      overrides: {
      },
    }],

    // require or disallow a space immediately following the // or /* in a comment
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': ['error', 'always', {
      exceptions: ['-', '+'],
      markers: ['=', '!']           // space here to support sprockets directives
    }],

    // require or disallow the Unicode Byte Order Mark
    // http://eslint.org/docs/rules/unicode-bom
    // 要求或禁止 Unicode BOM
    'unicode-bom': ['error', 'never'],

    // require regex literals to be wrapped in parentheses
    // 要求正则表达式被括号括起来
    'wrap-regex': 'off'
  }
};