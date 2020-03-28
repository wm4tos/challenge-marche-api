const bluebird = require('bluebird');
const redis = require('redis');
const { REDIS_URL, REDIS_PORT } = require('./config');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient({ url: REDIS_URL, port: REDIS_PORT });

module.exports = {
  client,
};
