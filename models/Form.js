const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  phoneNum: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  plan: {
    type: String,
    required: true
  },
  planCycle: {
    type: String,
    required: true
  },
  planFee: {
    type: Number,
    required: true
  },
  addons: {
    onlineService: {
      type: Number,
      default: 0
    },
    customize: {
      type: Number,
      default: 0
    },
    largerStorage: {
      type: Number,
      default: 0
    }
  },
  total: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Form', FormSchema);