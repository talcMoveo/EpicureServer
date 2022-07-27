const model = require("../schemes/dishScheme").Dish;

const postDish = (data) => {
  return model.create(data);
};

const getAllDishes = () => {
  // return await model.find().populate("restaurantRef");
}

module.exports = {
  postDish,
  getAllDishes
};