// const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  img: {
    type: String,
  },
  rating: {
    type: Number,
  },
  chef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "chefs",
  },
});

const RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);

module.exports = { RestaurantModel };