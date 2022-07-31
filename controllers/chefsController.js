const chefsHandler = require("../handlers/chefsHandler");
const restaurantsHandler = require("../handlers/restaurantsHandler");
const dishesHandler = require("../handlers/dishesHandler");

const addChef = async (req, res) => {
  try {
    const result = await chefsHandler.addChef(req.body);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const getChef = async (req, res) => {
  try {
    const result = await chefsHandler.getChef(req.params.id);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const updateChef = async (req, res) => {
  try {
    const result = await chefsHandler.updateChef(req.params.id, req.body);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const deleteChef = async (req, res) => {
  try {
    await restaurantsHandler.deleteSeveralRestaurants(req.params.id);
    const deletedRestaurants = await restaurantsHandler.getRestaurantsIdByChef(req.params.id);
    await deletedRestaurants.forEach(res => {
      dishesHandler.deleteSeveralDishes(res);
    })
    const result = await chefsHandler.deleteChef(req.params.id);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const activateChef = async (req, res) => {
  try {
    const result = await chefsHandler.activateChef(req.params.id);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = { addChef, getChef, updateChef, deleteChef, activateChef };
