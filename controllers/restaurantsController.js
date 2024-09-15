const restaurantsHandler = require("../handlers/restaurantsHandler");
const dishesHandler = require("../handlers/dishesHandler");

const addRestaurant = async (req, res) => {
  try {
    const result = await restaurantsHandler.addRestaurant(req.body);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const getRestaurant = async (req, res) => {
  try {
    const result = await restaurantsHandler.getRestaurant(req.params.id);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const getAllRestaurants = async (req, res) => {
  try {
    const result = await restaurantsHandler.getAllRestaurants(req.params.id);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const getPopularRestaurants = async (req, res) => {
  try {
    const result = await restaurantsHandler.getPopularRestaurants();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const updateRestaurant = async (req, res) => {
  try {
    const result = await restaurantsHandler.updateRestaurant(
      req.params.id,
      req.body
    );
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const result = await restaurantsHandler.deleteRestaurant(req.params.id);
    await dishesHandler.deleteSeveralDishes(req.params.id);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const activateRestaurant = async (req, res) => {
  try {
    const result = await restaurantsHandler.activateRestaurant(req.params.id);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const getSignatureDishes = async (req, res) => {
  try {
    const result = await restaurantsHandler.getSignatureDishes();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = {
  addRestaurant,
  getRestaurant,
  getAllRestaurants,
  getPopularRestaurants,
  updateRestaurant,
  deleteRestaurant,
  activateRestaurant,
  getSignatureDishes,
};
