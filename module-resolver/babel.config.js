const alias = require('./alias.config');

module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    [
      'module-resolver',
      {
        resolvePath(sourcePath) {
          return alias[sourcePath];
        },
      },
    ],
  ]
};
