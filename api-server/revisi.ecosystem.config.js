const loadEnvConfig = require('./utils/loadEnvConfig');
const getLoopbackModulePath = require('./utils/getLoopbackModulePath');

const env = loadEnvConfig();
const loopbackModuleResolutionHack = getLoopbackModulePath();

module.exports = {
  apps: [
    {
      script: './lib/production-start.js',
      cwd: __dirname,
      env: { ...env, NODE_PATH: loopbackModuleResolutionHack },
      max_memory_restart: '600M',
      instances: 'max',
      exec_mode: 'cluster',
      name: env.DEPLOYMENT_ENV === 'staging' ? 'dev' : 'org'
    }
  ]
};
