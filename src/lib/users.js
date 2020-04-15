const { generateHash } = require('../helpers/bcrypt');

module.exports = [
  {
    name: 'Wesley Matos',
    email: 'wrickee@gmail.com',
    password: generateHash('wes123'),
  },
  {
    name: 'Fake user 1',
    email: 'user1@email.com',
    password: generateHash('fake-user123'),
  },
  {
    name: 'Fake user 2',
    email: 'user2@email.com',
    password: generateHash('fake-user123'),
  },
  {
    name: 'Fake user 3',
    email: 'user3@email.com',
    password: generateHash('fake-user123'),
  },
];
