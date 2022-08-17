const weeklyChefModel = require("../schemes/weeklyChefScheme").WeeklyChefModel;
const chefModel = require("../schemes/chefScheme").ChefModel;

const createWeeklyChef = (newChef) => {
    return  weeklyChefModel.create(newChef);
};

const changeWeeklyChef = (newChef) => {
    return  weeklyChefModel.findOneAndReplace({}, newChef);
};

const getWeeklyChef = () => {
    return weeklyChefModel.aggregate([
        {
          $lookup: {
            from: "chefs",
            localField: "chefRef",
            foreignField: "_id",
            as: "chef",
          },
        },
      ]);
};

const getWeeklyChefRestaurants = () => {
    return  weeklyChefModel.aggregate([
        {
          $lookup: {
            from: "chefs",
            localField: "chefRef",
            foreignField: "_id",
            as: "chef",
          },
        },
        {
          $lookup: {
            from: "restaurants",
            localField: "chefRef._id",
            foreignField: "chefRef._id",
            as: "chefRestaurants",
          },
          }
      ]);
};

// const getWeeklyChefRestaurants = () => {
//     return  weeklyChefModel.find().populate({ path: "chefRef", model: chefModel });
// };


module.exports = {
    createWeeklyChef,
    changeWeeklyChef,
    getWeeklyChef,
    getWeeklyChefRestaurants
};