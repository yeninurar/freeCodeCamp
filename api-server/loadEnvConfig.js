// utils/loadEnvConfig.js
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

function loadEnvConfig() {
  try {
    const filePath = path.resolve(__dirname, '..', '.env');
    return dotenv.parse(fs.readFileSync(filePath));
  } catch (e) {
    console.warn('[env warning] .env file not loaded');
    return {};
  }
}

module.exports = loadEnvConfig;
