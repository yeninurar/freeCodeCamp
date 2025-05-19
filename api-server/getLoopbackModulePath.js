// utils/getLoopbackModulePath.js
const path = require('path');

function getLoopbackModulePath() {
  return path.resolve(__dirname, '../node_modules/.pnpm/node_modules');
}

module.exports = getLoopbackModulePath;
