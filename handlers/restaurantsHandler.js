const { ChefModel } = require("../schemes/chefScheme");

const restaurantModel = require("../schemes/restaurantScheme").RestaurantModel;
const dishModel = require("../schemes/dishScheme").DishModel;

const addRestaurant = (data) => {
  return restaurantModel.create(data);
};

const getRestaurant = (restaurantId) => {
  return restaurantModel.findById(restaurantId);
};

const getAllRestaurants = (restaurantId) => {
  return restaurantModel.find().populate({ path: "signatureDish", model: dishModel }).populate({ path: "chefRef", model: ChefModel });
};

const getPopularRestaurants = () => {
  return restaurantModel.find({ popular: true, active: true })
  .populate({ path: "signatureDish", model: dishModel });
};

const updateRestaurant = (restaurantId, newData) => {
  return restaurantModel.findByIdAndUpdate(restaurantId, newData);
};

const deleteRestaurant = async (restaurantId) => {
  return restaurantModel.findByIdAndUpdate(restaurantId, { active: false });
};

const activateRestaurant = (restaurantId) => {
  return restaurantModel.findByIdAndUpdate(restaurantId, { active: true });
};

const deleteSeveralRestaurants = async (chefIdRef) => {
  return await restaurantModel.updateMany(
    { chefRef: chefIdRef },
    { active: false }
  );
};

const getRestaurantsIdByChef = async (chefIdRef) => {
  return await restaurantModel.find({ chefRef: chefIdRef });
};

const getSignatureDishes = async () => {
  return restaurantModel.aggregate([
    {
      $match: {
        active: true,
        popular: true,
      },
    },
    {
      $lookup: {
        from: "dishes",
        localField: "signatureDish",
        foreignField: "_id",
        as: "dish",
      },
    },
  ]);
};

module.exports = {
  addRestaurant,
  getRestaurant,
  getAllRestaurants,
  getPopularRestaurants,
  updateRestaurant,
  deleteRestaurant,
  activateRestaurant,
  deleteSeveralRestaurants,
  getRestaurantsIdByChef,
  getSignatureDishes,
};
