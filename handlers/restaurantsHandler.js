const restaurantModel = require("../schemes/restaurantScheme").RestaurantModel;

const postRestaurant = async (data) => {
  return restaurantModel.create(data);
};

module.exports = { postRestaurant };