const dishesHandler = require("../Handlers/dishesHandler");

const addDish = async (req, res) => {
  try {
    dish = {
      ...req.body,
    };
    const result = await dishesHandler.postDish(dish);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const getDishList = async (req, res) => {
  try {
    const result = await dishesHandler.getAllDishes();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
  // try {
  //   const result = await dishesHandler.getAllDishes();
  //   res.status(200).json({
  //     status: "Success",
  //     data: result,
  //   });
  // } catch (error) {
  //   console.log(error)
  //   res.status(400).json({
  //     status: "Failed",
  //     message: error,
  //   });
  // }
}

module.exports = { addDish, getDishList };
