module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/forbid-prop-types': 0,
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
