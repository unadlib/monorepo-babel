const path = require('path');

const getPackageSourcePath = packageName =>
  path.resolve(__dirname, `packages/${packageName}`);

module.exports = {
  'foo': getPackageSourcePath('foo'),
  'bar': getPackageSourcePath('bar'),
};
