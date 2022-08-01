const mongoose = require("mongoose");

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
  active: {
    type: Boolean,
    default: true,
  },
});

const ChefModel = mongoose.model("Chef", ChefSchema);

module.exports = { ChefModel };
