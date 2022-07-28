const restaurantsHandler = require("../Handlers/restaurantsHandler");

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

const updateRestaurant = async (req, res) => {
  try {
    const result = await restaurantsHandler.updateRestaurant(req.params.id, req.body);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const result = await restaurantsHandler.deleteRestaurant(req.params.id);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = { addRestaurant, getRestaurant, updateRestaurant, deleteRestaurant };
