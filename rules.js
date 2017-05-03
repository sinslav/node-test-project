module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "no-loops",
    "react",
    "import"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "settings": {
    ".ecmascript": 6,
    "jsx": true,
    "import/resolver": {
      "node": {
        "extensions": [".js", ".json"]
      }
    },
    "import/ignore": {
      "node": {
        "extensions": [".png", ".svg"]
      }
    }
  },
  "globals": {
    /* ??? */
    "Promise": true,
    "dup": true,
    "hour": true,
    "min": true,
    /* Stores and Mixins */
    "FormStore": true,
    "FormStoreMixin": true,
    "FormJSONEncoder": true,
    "CreateValidationMixin": true,
    "validation": true,
    "validateSubmitForm": true,
    /* Errors */
    "errors": true,
    "errorOutput": true,
    /* Survey/Email Block (Types) */
    "surveyBlockTypes": true,
    "SurveyBlockTypes": true,
    "BlockTypes": true,
    "survey_render_block_types": true,
    /* 3rd party libraries */
    "_": true,
    "React": true,
    "vex": true,
    "callOnVexSuccessFn": true,
    "Marty": true,
    "classSet": true,
    "moment": true,
    "Draggabilly": true,
    "Papa": true,
    "jsonschema": true,
    /* jsPlumb */
    "jsPlumbToolkit": true,
    "jsPlumb": true,
    "builder": true,
    "load": true,
    "table": true,
    "relationships": true,
    "zoom": true,
    "field": true,
    "sidebar": true,
    /* jasmine tests */
    "jasmine": true,
    "spyOn": true,
    "reduxTest": true,
    "beforeEach": true,
    "afterEach": true,
    "it": true,
    "xit": true,
    "describe": true,
    "expect": true,
    "store": true,
    "dispatch": true,
    /* Environment variables */
    "__DEV__": true
  },
  "extends": [
    "eslint:recommended"
  ],
  "rules": {
    ////// BEST PRACTICES
    // enforces getter/setter pairs in objects
    "accessor-pairs": 0,

    // enforces return statements in callbacks of array"s methods
    // http://eslint.org/docs/rules/array-callback-return
    "array-callback-return": 2,

    // treat var statements as if they were block scoped
    "block-scoped-var": 2,

    // specify the maximum cyclomatic complexity allowed in a program
    "complexity": [0, 11],

    // require return statements to either always or never specify values
    "consistent-return": 0,

    // specify curly brace conventions for all control statements
    "curly": [2, "multi-line"],

    // require default case in switch statements
    "default-case": [2, { "commentPattern": "^no default$" }],

    // encourages use of dot notation whenever possible
    "dot-notation": [0, { "allowKeywords": true }],

    // enforces consistent newlines before or after dots
    "dot-location": 0,

    // require the use of === and !==
    // http://eslint.org/docs/rules/eqeqeq
    "eqeqeq": 2,

    // make sure for-in loops have an if statement
    "guard-for-in": 2,

    // disallow the use of alert, confirm, and prompt
    "no-alert": 2,

    // disallow use of arguments.caller or arguments.callee
    "no-caller": 2,

    // disallow lexical declarations in case/default clauses
    // http://eslint.org/docs/rules/no-case-declarations.html
    "no-case-declarations": 2,

    // disallow division operators explicitly at beginning of regular expression
    "no-div-regex": 0,

    // disallow else after a return in an if
    "no-else-return": 2,

    // disallow empty functions, except for standalone funcs/arrows
    // http://eslint.org/docs/rules/no-empty-function
    "no-empty-function": [2, {
      "allow": [
        "arrowFunctions",
        "functions",
        "methods"
      ]
    }],

    // disallow empty destructuring patterns
    // http://eslint.org/docs/rules/no-empty-pattern
    "no-empty-pattern": 2,

    // disallow comparisons to null without a type-checking operator
    "no-eq-null": 0,

    // disallow use of eval()
    "no-eval": 2,

    // disallow adding to native types
    "no-extend-native": 2,

    // disallow unnecessary function binding
    "no-extra-bind": 2,

    // disallow Unnecessary Labels
    // http://eslint.org/docs/rules/no-extra-label
    "no-extra-label": 2,

    // disallow fallthrough of case statements
    "no-fallthrough": 2,

    // disallow the use of leading or trailing decimal points in numeric literals
    "no-floating-decimal": 2,

    // disallow the type conversions with shorter notations
    "no-implicit-coercion": 0,

    // disallow var and named functions in global scope
    // http://eslint.org/docs/rules/no-implicit-globals
    "no-implicit-globals": 0,

    // disallow use of eval()-like methods
    "no-implied-eval": 2,

    // disallow this keywords outside of classes or class-like objects
    "no-invalid-this": 0,

    // disallow usage of __iterator__ property
    "no-iterator": 2,

    // disallow use of labels for anything other then loops and switches
    "no-labels": [2, { "allowLoop": false, "allowSwitch": false }],

    // disallow unnecessary nested blocks
    "no-lone-blocks": 2,

    // disallow creation of functions within loops
    "no-loop-func": 2,

    // disallow magic numbers
    // http://eslint.org/docs/rules/no-magic-numbers
    "no-magic-numbers": [0, {
      "ignore": [],
      "ignoreArrayIndexes": true,
      "enforceConst": true,
      "detectObjects": false
    }],

    // disallow use of multiple spaces
    "no-multi-spaces": 2,

    // disallow use of multiline strings
    "no-multi-str": 2,

    // disallow reassignments of native objects
    "no-native-reassign": 2,

    // disallow use of new operator when not part of the assignment or comparison
    "no-new": 2,

    // disallow use of new operator for Function object
    "no-new-func": 2,

    // disallows creating new instances of String, Number, and Boolean
    "no-new-wrappers": 2,

    // disallow use of (old style) octal literals
    "no-octal": 2,

    // disallow use of octal escape sequences in string literals, such as
    // var foo = "Copyright \251";
    "no-octal-escape": 2,

    // disallow reassignment of function parameters
    // disallow parameter object manipulation
    // rule: http://eslint.org/docs/rules/no-param-reassign.html
    "no-param-reassign": [0, { "props": true }],

    // disallow usage of __proto__ property
    "no-proto": 2,

    // disallow declaring the same variable more then once
    "no-redeclare": 2,

    // disallow use of assignment in return statement
    "no-return-assign": 2,

    // disallow use of `javascript:` urls.
    "no-script-url": 2,

    // disallow self assignment
    // http://eslint.org/docs/rules/no-self-assign
    "no-self-assign": 2,

    // disallow comparisons where both sides are exactly the same
    "no-self-compare": 2,

    // disallow use of comma operator
    "no-sequences": 2,

    // restrict what can be thrown as an exception
    "no-throw-literal": 2,

    // disallow unmodified conditions of loops
    // http://eslint.org/docs/rules/no-unmodified-loop-condition
    "no-unmodified-loop-condition": 0,

    // disallow usage of expressions in statement position
    "no-unused-expressions": 0,

    // disallow unused labels
    // http://eslint.org/docs/rules/no-unused-labels
    "no-unused-labels": 2,

    // disallow unnecessary .call() and .apply()
    "no-useless-call": 2,

    // disallow useless string concatenation
    // http://eslint.org/docs/rules/no-useless-concat
    "no-useless-concat": 2,

    // disallow unnecessary string escaping
    // http://eslint.org/docs/rules/no-useless-escape
    "no-useless-escape": 2,

    // disallow use of void operator
    "no-void": 1,

    // disallow usage of configurable warning terms in comments: e.g. todo
    "no-warning-comments": [0, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],

    // disallow use of the with statement
    "no-with": 2,

    // requires to declare all vars on top of their containing scope
    "vars-on-top": 2,

    // require immediate function invocation to be wrapped in parentheses
    // http://eslint.org/docs/rules/wrap-iife.html
    "wrap-iife": [2, "outside"],

    // require or disallow Yoda conditions
    "yoda": 2,

    ////// ERRORS
    // require trailing commas in multiline object literals
    "comma-dangle": [2, "only-multiline"],

    // disallow assignment in conditional expressions
    "no-cond-assign": [2, "always"],

    // disallow use of console
    "no-console": 1,

    // disallow use of constant expressions in conditions
    "no-constant-condition": 2,

    // disallow control characters in regular expressions
    "no-control-regex": 2,

    // disallow use of debugger
    "no-debugger": 2,

    // disallow duplicate arguments in functions
    "no-dupe-args": 2,

    // disallow duplicate keys when creating object literals
    "no-dupe-keys": 2,

    // disallow a duplicate case label.
    "no-duplicate-case": 2,

    // disallow empty statements
    "no-empty": 2,

    // disallow the use of empty character classes in regular expressions
    "no-empty-character-class": 2,

    // disallow assigning to the exception in a catch block
    "no-ex-assign": 2,

    // disallow double-negation boolean casts in a boolean context
    "no-extra-boolean-cast": 0,

    // disallow unnecessary parentheses
    // http://eslint.org/docs/rules/no-extra-parens
    "no-extra-parens": [0, "all", {
      "conditionalAssign": true,
      "nestedBinaryExpressions": false,
      "returnAssign": false
    }],

    // disallow unnecessary semicolons
    "no-extra-semi": 2,

    // disallow overwriting functions written as function declarations
    "no-func-assign": 2,

    // disallow function or variable declarations in nested blocks
    "no-inner-declarations": 2,

    // disallow invalid regular expression strings in the RegExp constructor
    "no-invalid-regexp": 2,

    // disallow irregular whitespace outside of strings and comments
    "no-irregular-whitespace": 2,

    // disallow negation of the left operand of an in expression
    "no-negated-in-lhs": 2,

    // disallow the use of object properties of the global object (Math and JSON) as functions
    "no-obj-calls": 2,

    // disallow use of Object.prototypes builtins directly
    // http://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": 2,

    // disallow multiple spaces in a regular expression literal
    "no-regex-spaces": 2,

    // disallow sparse arrays
    "no-sparse-arrays": 2,

    // Avoid code that looks like two expressions but is actually one
    "no-unexpected-multiline": 0,

    // disallow unreachable statements after a return, throw, continue, or break statement
    "no-unreachable": 2,

    // disallow return/throw/break/continue inside finally blocks
    // http://eslint.org/docs/rules/no-unsafe-finally
    "no-unsafe-finally": 2,

    // disallow comparisons with the value NaN
    "use-isnan": 2,

    // ensure JSDoc comments are valid
    // http://eslint.org/docs/rules/valid-jsdoc
    "valid-jsdoc": 0,

    // ensure that the results of typeof are compared against a valid string
    "valid-typeof": 2,


    ////// IMPORTS
    // Static analysis:

    // ensure imports point to files/modules that can be resolved
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    "import/no-unresolved": [0, {
      "commonjs": true,
      "ignore": ["\\.(img|png|svg)$"]
    }],

    // ensure named imports coupled with named exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
    "import/named": 2,

    // ensure default import coupled with default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
    "import/default": 0,

    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
    "import/namespace": 0,

    // Helpful warnings:

    // disallow invalid exports, e.g. multiple defaults
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
    "import/export": 2,

    // do not allow a default import name to match a named export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    "import/no-named-as-default": 2,

    // warn on accessing default export property names that are also named exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
    "import/no-named-as-default-member": 2,

    // disallow use of jsdoc-marked-deprecated imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    "import/no-deprecated": 0,

    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    "import/no-extraneous-dependencies": [0, {
      "devDependencies": false,
      "optionalDependencies": false
    }],

    // Forbid mutable exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    "import/no-mutable-exports": 2,


    // ES6
    // enforces no braces where they can be omitted
    // http://eslint.org/docs/rules/arrow-body-style
    "arrow-body-style": [0, "always"],

    // require parens in arrow function arguments
    "arrow-parens": 0,

    // require space before/after arrow function"s arrow
    // http://eslint.org/docs/rules/arrow-spacing
    "arrow-spacing": [2, { "before": true, "after": true }],

    // verify super() callings in constructors
    "constructor-super": 0,

    // enforce the spacing around the * in generator functions
    // http://eslint.org/docs/rules/generator-star-spacing
    "generator-star-spacing": [2, { "before": false, "after": true }],

    // disallow modifying variables of class declarations
    // http://eslint.org/docs/rules/no-class-assign
    "no-class-assign": 2,

    // disallow arrow functions where they could be confused with comparisons
    // http://eslint.org/docs/rules/no-confusing-arrow
    "no-confusing-arrow": [2, {
      "allowParens": true
    }],

    // disallow modifying variables that are declared using const
    "no-const-assign": 2,

    // disallow duplicate class members
    // http://eslint.org/docs/rules/no-dupe-class-members
    "no-dupe-class-members": 2,

    // disallow importing from the same path more than once
    // http://eslint.org/docs/rules/no-duplicate-imports
    "no-duplicate-imports": 2,

    // disallow symbol constructor
    // http://eslint.org/docs/rules/no-new-symbol
    "no-new-symbol": 2,

    // disallow specific imports
    // http://eslint.org/docs/rules/no-restricted-imports
    "no-restricted-imports": 0,

    // disallow to use this/super before super() calling in constructors.
    "no-this-before-super": 0,

    // disallow useless computed property keys
    // http://eslint.org/docs/rules/no-useless-computed-key
    "no-useless-computed-key": 2,

    // disallow unnecessary constructor
    // http://eslint.org/docs/rules/no-useless-constructor
    "no-useless-constructor": 0,

    // disallow renaming import, export, and destructured assignments to the same name
    // http://eslint.org/docs/rules/no-useless-rename
    "no-useless-rename": [2, {
      "ignoreDestructuring": false,
      "ignoreImport": false,
      "ignoreExport": false
    }],

    // require let or const instead of var
    "no-var": 2,

    // require method and property shorthand syntax for object literals
    // http://eslint.org/docs/rules/object-shorthand
    "object-shorthand": [2, "always", {
      "ignoreConstructors": false,
      "avoidQuotes": true
    }],

    // suggest using arrow functions as callbacks
    "prefer-arrow-callback": [2, {
      "allowNamedFunctions": false,
      "allowUnboundThis": true
    }],

    // suggest using of const declaration for variables that are never modified after declared
    "prefer-const": [2, {
      "destructuring": "any",
      "ignoreReadBeforeAssign": true
    }],

    // suggest using Reflect methods where applicable
    "prefer-reflect": 0,

    // use rest parameters instead of arguments
    // http://eslint.org/docs/rules/prefer-rest-params
    "prefer-rest-params": 2,

    // suggest using the spread operator instead of .apply()
    "prefer-spread": 0,

    // suggest using template literals instead of string concatenation
    // http://eslint.org/docs/rules/prefer-template
    "prefer-template": 0,

    // disallow generator functions that do not have yield
    "require-yield": 0,

    // enforce spacing between object rest-spread
    // http://eslint.org/docs/rules/rest-spread-spacing
    "rest-spread-spacing": [2, "never"],

    // import sorting
    // http://eslint.org/docs/rules/sort-imports
    "sort-imports": 0,

    // enforce usage of spacing in template strings
    // http://eslint.org/docs/rules/template-curly-spacing
    "template-curly-spacing": 2,

    // enforce spacing around the * in yield* expressions
    // http://eslint.org/docs/rules/yield-star-spacing
    "yield-star-spacing": [2, "after"],

    // Module systems:

    // disallow require()
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
    "import/no-commonjs": 0,

    // disallow AMD require/define
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
    "import/no-amd": 2,

    // No Node.js builtin modules
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
    "import/no-nodejs-modules": 0,

    // Style guide:

    // disallow non-import statements appearing before import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md
    "import/imports-first": [2, "absolute-first"],

    // disallow duplicate imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    "import/no-duplicates": 2,

    // disallow namespace imports
    // TODO: enable?
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
    "import/no-namespace": 0,

    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    "import/extensions": [2, {
      "js": "never",
      "svg": "always",
      "png": "always",
      "jpg": "always",
      "ttf": "always",
      "eot": "always",
      "woff": "always"
    }],

    // Enforce a convention in module import order
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    // TODO: enable?
    "import/order": [0, {
      "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
      "newlines-between": "never"
    }],

    // Require a newline after the last import/require in a group
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    // TODO: enable when https://github.com/benmosher/eslint-plugin-import/issues/386 is resolved
    "import/newline-after-import": 0,

    "import/prefer-default-export": 0,


    ////// STYLE
    // enforce spacing inside array brackets
    "array-bracket-spacing": 0,

    // enforce spacing inside single-line blocks
    // http://eslint.org/docs/rules/block-spacing
    "block-spacing": [2, "always"],

    // enforce one true brace style
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],

    // require camel case names
    "camelcase": [2, { "properties": "never" }],

    // enforce spacing before and after comma
    "comma-spacing": [2, { "before": false, "after": true }],

    // enforce one true comma style
    "comma-style": [2, "last"],

    // disallow padding inside computed properties
    "computed-property-spacing": [2, "never"],

    // enforces consistent naming when capturing the current execution context
    "consistent-this": 0,

    // enforce newline at the end of file, with no multiple empty lines
    "eol-last": 2,

    // require function expressions to have a name
    "func-names": 0,

    // enforces use of function declarations or expressions
    "func-style": 0,

    // Blacklist certain identifiers to prevent them being used
    // http://eslint.org/docs/rules/id-blacklist
    "id-blacklist": 0,

    // this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    "id-length": 0,

    // require identifiers to match the provided regular expression
    "id-match": 0,

    // this option sets a specific tab width for your code
    // http://eslint.org/docs/rules/indent
    "indent": [2, 2, { "SwitchCase": 1, "VariableDeclarator": 1 }],

    // specify whether double or single quotes should be used in JSX attributes
    // http://eslint.org/docs/rules/jsx-quotes
    "jsx-quotes": 0,

    // enforces spacing between keys and values in object literal properties
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }],

    // require a space before & after certain keywords
    "keyword-spacing": [2, {
      "before": true,
      "after": true,
      "overrides": {
        "return": { "after": true },
        "throw": { "after": true },
        "case": { "after": true }
      }
    }],

    // disallow mixed "LF" and "CRLF" as linebreaks
    "linebreak-style": 0,

    // enforces empty lines around comments
    "lines-around-comment": 0,

    // specify the maximum depth that blocks can be nested
    "max-depth": [0, 4],

    "max-len": [2, 120, 2, {
      "ignoreUrls": true,
      "ignoreComments": false
    }],

    // specify the max number of lines in a file
    // http://eslint.org/docs/rules/max-lines
    "max-lines": [0, {
      "max": 300,
      "skipBlankLines": true,
      "skipComments": true
    }],

    // specify the maximum depth callbacks can be nested
    "max-nested-callbacks": 0,

    // limits the number of parameters that can be used in the function declaration.
    "max-params": [0, 3],

    // specify the maximum number of statement allowed in a function
    "max-statements": [0, 10],

    // restrict the number of statements per line
    // http://eslint.org/docs/rules/max-statements-per-line
    "max-statements-per-line": [0, { "max": 1 }],

    // require a capital letter for constructors
    "new-cap": [0, { "newIsCap": true }],

    // disallow the omission of parentheses when invoking a constructor with no arguments
    "new-parens": 0,

    // allow/disallow an empty newline after var statement
    "newline-after-var": 0,

    // http://eslint.org/docs/rules/newline-before-return
    "newline-before-return": 0,

    // enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    // http://eslint.org/docs/rules/newline-per-chained-call
    "newline-per-chained-call": [0, { "ignoreChainWithDepth": 3 }],

    // disallow use of the Array constructor
    "no-array-constructor": 2,

    // disallow use of bitwise operators
    "no-bitwise": 0,

    // disallow use of the continue statement
    "no-continue": 0,

    // disallow comments inline after code
    "no-inline-comments": 0,

    // disallow if as the only statement in an else block
    "no-lonely-if": 0,

    // disallow un-paren"d mixes of different operators
    // http://eslint.org/docs/rules/no-mixed-operators
    "no-mixed-operators": [2, {
      "groups": [
        ["+", "-", "*", "/", "%", "**"],
        ["&", "|", "^", "~", "<<", ">>", ">>>"],
        ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
        ["&&", "||"],
        ["in", "instanceof"]
      ],
      "allowSamePrecedence": false
    }],

    // disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs": 2,

    // disallow multiple empty lines and only one newline at the end
    "no-multiple-empty-lines": [2, { "max": 2, "maxEOF": 1 }],

    // disallow negated conditions
    // http://eslint.org/docs/rules/no-negated-condition
    "no-negated-condition": 0,

    // disallow nested ternary expressions
    "no-nested-ternary": 0,

    // disallow use of the Object constructor
    "no-new-object": 2,

    // disallow use of unary operators, ++ and --
    "no-plusplus": 0,

    // disallow certain syntax forms
    // http://eslint.org/docs/rules/no-restricted-syntax
    "no-restricted-syntax": [
      2,
      "DebuggerStatement",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement"
    ],

    // disallow space between function identifier and application
    "no-spaced-func": 2,

    // disallow the use of ternary operators
    "no-ternary": 0,

    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": 2,

    // disallow dangling underscores in identifiers
    "no-underscore-dangle": [2, {
      "allowAfterThis": false,
      "allow": [
        "case_",
        "id_",
        "type_",
        "and_",
        "or_",
        "_i",
        "_base",
        "_len",
        "_ref",
        "_results",
        "_this",
        "_setSelected",
        "_updateState",
        "_setRequired"
      ]
    }],

    // disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    // http://eslint.org/docs/rules/no-unneeded-ternary
    "no-unneeded-ternary": [2, { "defaultAssignment": false }],

    // disallow whitespace before properties
    // http://eslint.org/docs/rules/no-whitespace-before-property
    "no-whitespace-before-property": 2,

    // require padding inside curly braces
    "object-curly-spacing": [2, "always"],

    // enforce line breaks between braces
    // http://eslint.org/docs/rules/object-curly-newline
    // TODO: enable once https://github.com/eslint/eslint/issues/6488 is resolved
    "object-curly-newline": [0, {
      "ObjectExpression": { "minProperties": 0, "multiline": true },
      "ObjectPattern": { "minProperties": 0, "multiline": true }
    }],

    // enforce "same line" or "multiple line" on object properties.
    // http://eslint.org/docs/rules/object-property-newline
    "object-property-newline": [2, {
      "allowMultiplePropertiesPerLine": true
    }],

    // allow just one var statement per function
    "one-var": [2, "never"],

    // require a newline around variable declaration
    // http://eslint.org/docs/rules/one-var-declaration-per-line
    "one-var-declaration-per-line": [2, "always"],

    // require assignment operator shorthand where possible or prohibit it entirely
    "operator-assignment": 0,

    // enforce operators to be placed before or after line breaks
    "operator-linebreak": 0,

    // enforce padding within blocks
    "padded-blocks": [2, "never"],

    // require quotes around object literal property names
    // http://eslint.org/docs/rules/quote-props.html
    "quote-props": [2, "as-needed", { "keywords": false, "unnecessary": true, "numbers": false }],

    // specify whether double or single quotes should be used
    "quotes": [2, "single", { "avoidEscape": true }],

    // do not require jsdoc
    // http://eslint.org/docs/rules/require-jsdoc
    "require-jsdoc": 0,

    // require or disallow use of semicolons instead of ASI
    "semi": [2, "always"],

    // enforce spacing before and after semicolons
    "semi-spacing": [2, { "before": false, "after": true }],

    // sort variables within the same declaration block
    "sort-vars": 0,

    // require or disallow space before blocks
    "space-before-blocks": 2,

    // require or disallow space before function opening parenthesis
    // http://eslint.org/docs/rules/space-before-function-paren
    "space-before-function-paren": [2, { "anonymous": "always", "named": "never" }],

    // require or disallow spaces inside parentheses
    "space-in-parens": [2, "never"],

    // require spaces around operators
    "space-infix-ops": 2,

    // Require or disallow spaces before/after unary operators
    "space-unary-ops": 0,

    // require or disallow a space immediately following the // or /* in a comment
    "spaced-comment": [2, "always", {
      "exceptions": ["-", "+"],
      "markers": ["=", "!"]  // space here to support sprockets directives
    }],

    // require or disallow the Unicode Byte Order Mark
    // http://eslint.org/docs/rules/unicode-bom
    "unicode-bom": [2, "never"],

    // require regex literals to be wrapped in parentheses
    "wrap-regex": 0,


    ////// VARIABLES
    // enforce or disallow variable initializations at definition
    "init-declarations": 0,

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    "no-catch-shadow": 0,

    // disallow deletion of variables
    "no-delete-var": 2,

    // disallow labels that share a name with a variable
    "no-label-var": 0,

    // disallow specific globals
    // event - https://developer.mozilla.org/en-US/docs/Web/API/Window/event
    // find - https://developer.mozilla.org/en-US/docs/Web/API/Window/find
    // open - window.open()
    "no-restricted-globals": [2, "error", "event", "find", "open"],

    // disallow declaration of variables already declared in the outer scope
    "no-shadow": 0,

    // disallow shadowing of names such as arguments
    "no-shadow-restricted-names": 2,

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undef": 2,

    // disallow use of undefined when initializing variables
    "no-undef-init": 0,

    // disallow use of undefined variable
    "no-undefined": 0,

    "no-unused-vars": [2, { "vars": "local", "args": "after-used" }],

    // disallow use of variables before they are defined
    "no-use-before-define": 2,

    // React Recommended
    "react/jsx-no-undef": 0,
    "react/no-danger": 0,

    // React Plugin
    "react/self-closing-comp": 2,
    "react/jsx-space-before-closing": [2, "always"],
    "react/require-render-return": 2,
    "react/no-is-mounted": 0,
    "react/jsx-no-duplicate-props": 2,
    "react/no-deprecated": 0,
    "react/jsx-no-comment-textnodes": 2,
    "react/no-did-mount-set-state": 0,
    "react/no-did-update-set-state": 0,
    "react/no-direct-mutation-state": 0,
    "react/no-multi-comp": 0,
    "react/no-render-return-value": 2,
    "react/no-set-state": 0,
    "react/no-string-refs": 0,
    "react/no-unknown-property": 2,
    "react/prefer-es6-class": 2,
    "react/prefer-stateless-function": 0,
    "react/prop-types": 0,
    "react/jsx-wrap-multilines": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,

    // JSX Specific
    "react/jsx-pascal-case": 2,
    "react/jsx-boolean-value": 2,
    "react/jsx-no-bind": 0,
    "react/jsx-equals-spacing": [2, "never"]
  }
}
