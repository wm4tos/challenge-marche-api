const { saveFileOnRedis, getFileFromRedis, deleteFileFromRedis } = require('./repository');

module.exports.saveInRedis = saveFileOnRedis;

module.exports.getFromRedis = getFileFromRedis;

module.exports.deleteFromRedis = deleteFileFromRedis;
