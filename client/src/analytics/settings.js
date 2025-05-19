import envData from './env.json';

const { deploymentEnv } = envData;

export const getGTMId = () => {
  if (deploymentEnv === 'staging') return devAnalyticsId;
  return prodAnalyticsId;
};
