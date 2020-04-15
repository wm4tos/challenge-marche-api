const csv = require('csvtojson/v2');

module.exports = (path, param = {}, preFileLine = n => n) => csv(param)
  .preFileLine(preFileLine)
  .fromFile(path);
