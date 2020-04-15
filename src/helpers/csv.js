const csv = require('csvtojson/v2');

module.exports = (str, method, opts = {}) => csv(opts)[method](str);
