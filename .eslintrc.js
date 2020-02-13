module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true,
    node: false
  },
  rules: {
    "no-console": "off",
    "no-console": "off",
    "no-alert": "off",
    eqeqeq: ["error", "always"],
    "no-eval": "error",
    "no-caller": "error",
    "no-undef": "error",
    "no-eq-null": "error",
    "no-useless-escape": "off",
    "no-extra-parens": "error"
  },
  overrides: [
    // node files
    {
      files: [
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      }
    }
  ]
};
