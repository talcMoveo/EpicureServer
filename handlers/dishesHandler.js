const dishModel = require("../schemes/dishScheme").DishModel;

const postDish = async (data) => {
  return dishModel.create(data);
};

const getAllDishes = () => {
  // return await model.find().populate("restaurantRef");
}

module.exports = {
  postDish,
  getAllDishes
};