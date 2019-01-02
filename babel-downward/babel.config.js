module.exports = function (api) {
  const presets = [
    '@babel/env',
  ];

  const babelrcRoots = [
    ".",
    "packages/*",
  ];

  api.cache(true);

  return {
    presets,
    babelrcRoots,
  };
}