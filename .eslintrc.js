module.exports = {
  'extends': ['eslint:recommended', 'google'],
  'rules': {
    'max-len': ['error', {'code': 160}],
  },
  'env': {
    'node': true,
    'es6': true,
    'jest': true,
  },
  'parserOptions': {
    'ecmaVersion': 8,
  },
  'parser': 'babel-eslint',
};
