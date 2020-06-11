module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    quotes: ['error', 'single'],
    'max-len': ['error', { code: 180, ignoreStrings: true, ignoreUrls: true }],
    'import/no-unresolved': 0,
    'import/no-cycle': 0,
    'linebreak-style': 0,
    'comma-dangle': 1,
    'import/prefer-default-export': 0,
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'object-curly-newline': ['error', { ObjectPattern: 'never' }],
    'no-trailing-spaces': ['error', {
      skipBlankLines: true,
    }],
    'template-curly-spacing': ['error', 'always'],
    'import/extensions': ['error', 'never'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/no-danger': 'off',
    "import/extensions": 0,
  },
};
