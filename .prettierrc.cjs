// .prettierrc.js
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: true,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'none',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  singleAttributePerLine: false,
  overrides: [
    {
      files: ['*.html'],
      options: {
        tabWidth: 4
      }
    }
  ]
}
