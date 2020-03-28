const path = require('path');

const csv = require('./csv');
const User = require('../modules/users/model');
const Order = require('../modules/orders/model');

const usersMock = require('../lib/users');

const seed = force => async (mock, model) => {
  if (force) await model.deleteMany();

  const length = await model.countDocuments();

  if (length > 0) return false;

  await model.insertMany(mock);

  return true;
};

const getOrdersMock = async () => {
  const mockPath = path.join(__dirname, '..', 'lib', 'orders.csv');

  const fromStringToBool = item => /TRUE/.test(item);
  const param = {
    colParser: {
      hasColdProducts: fromStringToBool,
      hasFruitsOrVegetables: fromStringToBool,
    },
  };

  const preFileLine = (lineData, lineNumber) => {
    if (lineNumber === 0) {
      const arr = lineData.split(',');

      return arr.map((x) => {
        const matches = x.match(/_\w/g);

        return matches.reduce(
          (acc, match) => acc.replace(match, match.substring(1).toUpperCase()),
          x,
        );
      });
    }

    return lineData;
  };

  return csv(
    mockPath,
    param,
    preFileLine,
  );
};

const seedUsers = fn => fn(usersMock, User);

const seedOrders = async fn => fn(await getOrdersMock(), Order);

module.exports = async (force) => {
  const toSeed = seed(force);
  const u = await seedUsers(toSeed);
  const o = await seedOrders(toSeed);

  if (u) process.stdout.write('Users seeded! :)\n');
  if (o) process.stdout.write('Orders seeded! :)\n');
  return null;
};
