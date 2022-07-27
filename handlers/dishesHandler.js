const model = require("../schemes/dishScheme").DishesModel;

const postDish = (data) => {
  return model.create(data);
};

const getAllDishes = () => {

}

module.exports = { postDishe };