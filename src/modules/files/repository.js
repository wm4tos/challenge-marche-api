const { client } = require('../../redis');
const { REDIS_EXPIRES } = require('../../config');

/**
 * @description Save file on redis.
 * @param {string} id Uuid of file
 * @param {{ name, path, size, type, isProfilePic, isDefaultProfilePic }} file File to save.
 */
const saveFileOnRedis = (id, file) => client.set(id, JSON.stringify(file), 'EX', REDIS_EXPIRES);

/**
 * @description Get file from Redis.
 */
const getFileFromRedis = async id => JSON.parse(await client.getAsync(id));

/**
 * @description Delete file from Redis.
 */
const deleteFileFromRedis = key => client.del(key, (err, deleted) => {
  if (err) throw err;
  return deleted;
});

module.exports = {
  saveFileOnRedis,
  getFileFromRedis,
  deleteFileFromRedis,
};
