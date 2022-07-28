const restaurantModel = require("../schemes/restaurantScheme").RestaurantModel;

const postRestaurant = (data) => {
  return restaurantModel.create(data);
};

module.exports = { postRestaurant };
