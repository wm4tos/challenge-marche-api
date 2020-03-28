const User = require('../modules/users/model');
const usersMock = require('../lib/users');

const seed = force => async (mock, model) => {
  if (force) await model.deleteMany();

  const length = await model.countDocuments();

  if (length > 0) return false;

  await model.insertMany(mock);

  return true;
};

const seedUsers = fn => fn(usersMock, User);

module.exports = async (force) => {
  const toSeed = seed(force);
  const u = await seedUsers(toSeed);

  if (u) process.stdout.write('Users seeded! :)\n');
  return null;
};
