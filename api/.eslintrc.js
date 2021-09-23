module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'import/first': 'off',
    'no-param-reassign': 'off',
    'operator-linebreak': 'off',
    camelcase: 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
  },
};
