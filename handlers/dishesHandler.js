const dishModel = require("../schemes/dishScheme").DishModel;
const restaurantModel = require("../schemes/restaurantScheme").RestaurantModel;


const addDish = (data) => {
  return dishModel.create(data);
};

const getAllDishes2 = () => {
  return dishModel.aggregate([
    {
      $lookup: {
        from: "restaurants",
        localField: "restaurantRef",
        foreignField: "_id",
        as: "restaurant",
      },
    },
  ]);
};

const getAllDishesWithMatch = () => {
  return dishModel.aggregate([
    {
      $match: {
        active: true,
      },
    },
    {
      $lookup: {
        from: "restaurants",
        localField: "restaurantRef",
        foreignField: "_id",
        as: "restaurant",
      },
    },
  ]);
};

const getAllDishes = async () => {
  return await dishModel.find().populate({ path: "restaurantRef", model: restaurantModel });
};

const getDish = (dishId) => {
  return dishModel.findById(dishId);
};

const updateDish = (dishId, newData) => {
  return dishModel.findByIdAndUpdate(dishId, newData);
};

const deleteDish = (dishId) => {
  return dishModel.findByIdAndUpdate(dishId, { active: false });
};

const activateDish = (dishId) => {
  return dishModel.findByIdAndUpdate(dishId, { active: true });
};

const deleteSeveralDishes = async (restaurantIdRef) => {
  return await dishModel.updateMany(
    { restaurantRef: restaurantIdRef },
    { active: false }
  );
};

module.exports = {
  addDish,
  getDish,
  getAllDishes,
  updateDish,
  deleteDish,
  activateDish,
  deleteSeveralDishes,
};
