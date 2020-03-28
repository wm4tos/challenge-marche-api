const { compare } = require('../../helpers/bcrypt');

module.exports.passwordsAreEquals = (
  { password: userPassword },
  { password: reqPassword },
) => compare(userPassword, reqPassword);

module.exports.formatUser = ({
  _id, password, ...rest
}) => ({
  id: _id, ...rest,
});
