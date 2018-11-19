module.exports = {
  'env': {
    'browser': true,
    'jest': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'airbnb',
    'prettier',
  ],
  'parser': 'babel-eslint',
  'plugins': [
    'prettier',
  ],
  'rules': {
    'prettier/prettier': ['off', {
      'singleQuote': true,
      'trailingComma': 'es5'
    }],
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'lines-between-class-members': 'off',
    'consistent-return': 'off',
    // react
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-one-expression-per-line': 'off',
    // jsx-a11y
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    }
  }
}
