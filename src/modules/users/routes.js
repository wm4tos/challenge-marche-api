const { Router } = require('express');
const { auth: authRoute, create } = require('./controller');
const contracts = require('./contract');
const validator = require('../../middlewares/validator');

module.exports = () => {
  const router = Router();

  /**
   * @typedef Login
   * @property {string} email.required
   * @property {string} password.required
   */

  /**
   * @route POST /user/auth
   * @group User - Operations about user
   * @param {Login.model} user.body - E-mail and password of user
   * @returns {object} 200 - User authenticated successfully
   * @returns {object} 400 - Body of request malformed
   * @returns {object} 401 - User or password incorrect
   */
  router.post('/auth', validator(contracts.auth, 'body'), authRoute);

  /**
   * @typedef User
   * @property {string} name.required
   * @property {string} email.required
   * @property {string} password.required
   * @property {boolean} admin
   */

  /**
   * @route POST /user/create
   * @group User - Operations about user
   * @param {User.model} user.body - Data of user
   * @returns {object} 200 - User created successfully
   * @returns {object} 400 - Body of request malformed
   * @returns {object} 401 - No token provided
   * @returns {object} 409 - Duplicate user
   */
  router.post('/register', validator(contracts.create, 'body'), create);

  return { router, endpoint: '/user' };
};
