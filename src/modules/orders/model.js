const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
  orderId: {
    type: Number,
    required: true,
  },
  deliveryDate: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  userAge: {
    type: Number,
    required: true,
  },
  hasFruitsOrVegetables: {
    type: Boolean,
    required: true,
  },
  hasColdProducts: {
    type: Boolean,
    required: true,
  },
  userNumberOfOrdersTotal: {
    type: Number,
    required: true,
  },
  productsQuantityTotal: {
    type: Number,
    required: true,
  },
  numberOfItemsTotal: {
    type: Number,
    required: true,
  },
  ordersReceivedInFullTotal: {
    type: Number,
    required: true,
  },
  ordersReceivedOnTimeTotal: {
    type: Number,
    required: true,
  },
  orderTotalValue: {
    type: Number,
    required: true,
  },
  numberOfBoxes: {
    type: Number,
    required: true,
  },
  distanceFromHub: {
    type: Number,
    required: true,
  },
});

module.exports.orderSchema = orderSchema;

module.exports = model('orders', orderSchema);
