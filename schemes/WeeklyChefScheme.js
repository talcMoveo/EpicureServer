const mongoose = require("mongoose");

const WeeklyChefSchema = new mongoose.Schema({
  chefRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "chefs",
  },
});

const WeeklyChefModel = mongoose.model("weeklychefs", WeeklyChefSchema);

module.exports = { WeeklyChefModel };
