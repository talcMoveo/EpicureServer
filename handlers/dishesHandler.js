const dishModel = require("../schemes/dishScheme").DishModel;
const restaurantModel = require("../schemes/restaurantScheme").RestaurantModel;

const postDish = (data) => {
  return dishModel.create(data);
};

const getAllDishesPopulate = () => {
  return dishModel.aggregate([
    {
      $lookup: {
        from: 'restaurants',
        localField: 'restaurantRef',
        foreignField: '_id',
        as: 'restaurant',
      },
    },
  ]);
};

const getAllDishes = async () => {
  return await dishModel.find({}).populate({path : 'restaurantRef', model : restaurantModel});
}

module.exports = {
  postDish,
  getAllDishes,
  getAllDishesPopulate
};
