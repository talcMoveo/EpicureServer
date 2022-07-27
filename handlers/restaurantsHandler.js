const model = require("../schemes/restaurantScheme").Restaurant;

const postRestaurants = (data) => {
  return model.create(data);
};

module.exports = { postRestaurants };