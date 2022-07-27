const dishesHandler = require("../Handlers/dishesHandler");

const addDish = async (req, res) => {
  try {
    dish = {
      ...req.body,
    };
    const result = await dishesHandler.postDish(dish);
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};

const getDishList = async (req, res) => {
  try {
    const result = await dishedHandler.getAllDishes();
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
}

module.exports = {
  addDish,
  getDishList
};