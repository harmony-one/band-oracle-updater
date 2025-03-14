import * as process from 'process';

export default () => ({
  version: process.env.npm_package_version || '0.0.1',
  name: process.env.npm_package_name || '',
  port: parseInt(process.env.PORT, 10) || 3000,
  rpcUrl: process.env.RPC_URL || 'https://api.harmony.one',
  privateKey: process.env.PRIVATE_KEY || '',
  contractAddresses: (process.env.BAND_CONTRACT_ADDRESSES || '')
    .split(',')
    .map(item => item.trim())
    .filter(item => item),
  updateIntervalSeconds: parseInt(process.env.UPDATE_INTERVAL_SECONDS || '3600'),
});
