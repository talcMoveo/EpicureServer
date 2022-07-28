const restaurantModel = require("../schemes/restaurantScheme").RestaurantModel;

const addRestaurant = (data) => {
  return restaurantModel.create(data);
};

const getRestaurant = (restaurantId) => {
  return restaurantModel.findById(restaurantId);
};

const updateRestaurant = (restaurantId, newData) => {
  return restaurantModel.findByIdAndUpdate(restaurantId, newData);
};

const deleteRestaurant = (restaurantId) => {
  return restaurantModel.deleteOne({_id : restaurantId});
};


module.exports = { addRestaurant, getRestaurant, updateRestaurant, deleteRestaurant };
