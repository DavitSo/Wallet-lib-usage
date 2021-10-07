'use strict';

const redis = require('redis');

const {redisConfig} = require('./config');
require('bluebird').promisifyAll(redis);

module.exports = () => {
  return new Promise((resolve, reject) => {
    const redisClient = redis.createClient({
      port: redisConfig.port, host: redisConfig.host, password: redisConfig.password,
      retry_strategy: (options) => {
        if (options.error) {
          console.log(`REDIS ERROR : Cache server is unavailable. Error: ${options.error.code}`);
        }

        if (options.total_retry_time > 1000 * 60 * 60) {
          console.log('REDIS ERROR : Cache server retry time elapsed');
          return;
        }

        if (options.attempt > 10) {
          console.log('REDIS ERROR : Cache server connection attempts exceeded');
          return;
        }
        return Math.min(options.attempt * 100, 3000);
      },
    });

    redisClient.on('error', (err) => {
      console.log(`REDIS ERROR : ${err.message}`);
      reject(err);
    });

    redisClient.on('ready', async () => {
      console.log('REDIS INFO : Cache service is online.');
      global.redisClient = redisClient;
      resolve();
    });
  },
  );
};
