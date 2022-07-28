const mongoose = require('mongoose');

const ChefSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  img: {
    type: String,
  },
  description: {
    type: String,
  },
});

const ChefModel = mongoose.model('Chef', ChefSchema);

module.exports = { ChefModel };
