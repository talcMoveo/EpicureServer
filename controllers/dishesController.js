const dishesHandler = require("../handlers/dishesHandler");

const addDish = async (req, res) => {
  try {
    const result = await dishesHandler.addDish(req.body);
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
};

const getDish = async (req, res) => {
  try {
    const result = await dishesHandler.getDish(req.params.id);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const updateDish = async (req, res) => {
  try {
    const result = await dishesHandler.updateDish(req.params.id, req.body);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const deleteDish = async (req, res) => {
  try {
    const result = await dishesHandler.deleteDish(req.params.id);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const activateDish = async (req, res) => {
  try {
    const result = await dishesHandler.activateDish(req.params.id);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = {
  addDish,
  getDish,
  getDishList,
  updateDish,
  deleteDish,
  activateDish,
};
