const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  files: [
    {
      name: {
        type: String,
        required: true,
      },
      path: {
        type: String,
        required: true,
      },
      size: {
        type: Number,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      isProfilePic: {
        type: Boolean,
        default: false,
      },
      isDefaultProfilePic: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

module.exports.userSchema = userSchema;

module.exports = model('users', userSchema);
