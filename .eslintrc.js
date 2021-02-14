module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ['json', 'node'],
  extends: ['eslint:recommended'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
  env: {
    node: true,
    es6: true,
  },
  rules: {
    'node/no-unpublished-import': [
      'error',
      {
        allowModules: ['dotenv'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        ecmaFeatures: {
          modules: true,
        },
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'prettier/@typescript-eslint',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        'react/prop-types': 0,
        'node/no-missing-import': [
          'error',
          { tryExtensions: ['.js', '.json', '.node', '.ts', '.d.ts'] },
        ],
        '@typescript-eslint/ban-ts-comment': ['warn'],
      },
    },
  ],
};
