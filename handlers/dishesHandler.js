const dishModel = require("../schemes/dishScheme").DishModel;
const restaurantModel = require("../schemes/restaurantScheme").RestaurantModel;

const addDish = (data) => {
  return dishModel.create(data);
};

const getAllDishes1 = () => {
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

const getDish = (dishId) => {
  return dishModel.findById(dishId);
};

const updateDish = (dishId, newData) => {
  return dishModel.findByIdAndUpdate(dishId, newData);
};

const deleteDish = (dishId) => {
  return dishModel.deleteOne({_id : dishId});
};


module.exports = { addDish, getDish, getAllDishes, updateDish, deleteDish };

