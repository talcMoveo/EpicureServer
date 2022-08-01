const mongoose = require("mongoose");

const ChefOfTheWeekSchema = new mongoose.Schema({
  chefRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "chefs",
  },
});

const ChefOfTheWeekModel = mongoose.model("ChefOfTheWeek", ChefOfTheWeekSchema);

module.exports = { ChefOfTheWeekModel };
