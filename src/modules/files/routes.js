const { save } = require('./controller');

module.exports = (Router) => {
  const router = Router();

  /**
   * @route POST /files
   * @group Files - Operations about files
   * @param {file} data.formData - csv file
   */
  router.post('/', save);

  return { router, endpoint: '/files' };
};
