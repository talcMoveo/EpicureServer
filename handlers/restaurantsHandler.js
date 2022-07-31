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

const deleteRestaurant = async (restaurantId) => {
  return restaurantModel.findByIdAndUpdate(restaurantId, { active : false});
};

const activateRestaurant = (restaurantId) => {
  return restaurantModel.findByIdAndUpdate(restaurantId, { active : true});
};

const deleteSeveralRestaurants = async (chefIdRef) => {
  return await restaurantModel.updateMany(
    { chefRef: chefIdRef },
    { active: false }
  );
}

const getRestaurantsIdByChef = async (chefIdRef) => {
  return await restaurantModel.find(
    { chefRef: chefIdRef }
  );
}

module.exports = { addRestaurant, getRestaurant, updateRestaurant, deleteRestaurant, activateRestaurant, deleteSeveralRestaurants, getRestaurantsIdByChef };
