const chefModel = require("../schemes/chefScheme").ChefModel;
const dishModel = require("../schemes/dishScheme").DishModel;
const restaurantModel = require("../schemes/restaurantScheme").RestaurantModel;

const getSearchRes = async (qureyParams) => {
  for (const param in qureyParams) {
    let regExStr = new RegExp(".*" + qureyParams[param] + ".*");
    qureyParams[param] = regExStr;
  }

  const [chefRes, dishRes, restaurantRes] = await Promise.all([
    chefModel.find(qureyParams),
    dishModel.find(qureyParams),
    restaurantModel.find(qureyParams),
  ]);

  return {
    chefResults: chefRes,
    dishResults: dishRes,
    restaurantResults: restaurantRes,
  };
};

const postSearchRes = async (searchWord) => {
  const regExStr = new RegExp(".*" + searchWord + ".*");

  const [chefRes, dishRes, restaurantRes] = await Promise.all([
    chefModel.find({ name: regExStr }),
    dishModel.find({ name: regExStr }),
    restaurantModel.find({ name: regExStr }),
  ]);

  return {
    chefResults: chefRes,
    dishResults: dishRes,
    restaurantResults: restaurantRes,
  };
};

module.exports = { getSearchRes, postSearchRes };
