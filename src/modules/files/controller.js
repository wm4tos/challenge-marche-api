const { IncomingForm } = require('formidable');
const path = require('path');
const { v4: uuid } = require('uuid');

const { saveInRedis } = require('./service');
const { formatFile, getFileExtension } = require('./helper');

module.exports.save = (req, res, next) => {
  try {
    const form = new IncomingForm();
    const id = uuid();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error(err);
        return next(err);
      }

      await saveInRedis(id, formatFile(files.data));

      return res.status(201).send(id);
    });

    form.on('fileBegin', (_, file) => {
      // eslint-disable-next-line no-param-reassign
      file.path = path.join(__dirname, '..', '..', '..', 'uploaded', id + getFileExtension(file.name));
    });
  } catch (error) {
    next(error);
  }
};
