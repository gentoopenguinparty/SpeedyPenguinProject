module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
<<<<<<< HEAD
<<<<<<< HEAD
    "import/extensions": [ "never"],
    'import/prefer-default-export': 'off',
    'eol-last': 'off',
=======
    'import/extensions': 0,
>>>>>>> c11d293c1e7cbbfa79c70515e2163ede972f6f87
=======
    "import/extensions": 0
>>>>>>> 34e00e5 (Added fullscreen functionality to gallery)
  },
};
