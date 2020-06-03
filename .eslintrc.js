module.exports = {
  //   // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  //   // This option interrupts the configuration hierarchy at this file
  //   // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },

  env: {
    browser: true
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    // 'eslint:recommended',


    // Uncomment any of the lines below to choose desired strictness,
    // but leave only one uncommented!
    // See https://eslint.vuejs.org/rules/#available-rules
    'plugin:vue/strongly-recommended', // Priority A: Essential (Error Prevention) vue/essential
    // 'plugin:vue/strongly-recommended' // Priority B: Strongly Recommended (Improving Readability)
    // 'plugin:vue/recommended' // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

    'standard'

  ],

  plugins: [
    // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-file
    // required to lint *.vue files
    'vue',

  ],

  globals: {
    'ga': true, // Google Analytics
    'cordova': true,
    '__statics': true,
    'process': true,
    'Capacitor': true,
    'chrome': true
  },

  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': 'off',

    'space-before-function-paren': ["error", "never"],  //函数括号前不需要空格
    "vue/max-attributes-per-line": ["error", {          //强制每行的最大属性数
      "singleline": 5,
      "multiline": {
        "max": 5,
        "allowFirstLine": true
      }
    }],
    'vue/singleline-html-element-content-newline': ['error', {  //允许在单行元素的内容之前和之后不需要换行
      'ignoreWhenNoAttributes': false,
      // "ignoreWhenEmpty": true,
      "ignores": ['div', 'q-item-section', 'router-link']
    }],
    'curly': ["error", "multi-or-nest"],  //if语句换行格式
  //   "vue/multiline-html-element-content-newline": ["error", {
  //     "ignoreWhenEmpty": true,
  //     "ignores": ["per",'router-link'],
  //     "allowEmptyLines": false
  // }],
    // "vue/singleline-html-element-content-newline": ["error", "never"],//允许在单行元素的内容之前和之后不需要换行
    // "semi": ["error", "always"],//要求或禁止使用分号
    // "eol-last": ["error", "never"],//在文件末尾要求或禁止换行
    // "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],//禁止多行空行
    // "quotes": ["error", "double", { "allowTemplateLiterals": true }],//强制使用反引号，双引号或单引号

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
