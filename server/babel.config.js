// babel.config.js
module.exports = {
    presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
    env: { test: { plugins: ['@babel/plugin-transform-runtime'] } },
  };
  