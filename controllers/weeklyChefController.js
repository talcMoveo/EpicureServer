const weeklyChefHandler = require("../handlers/weeklyChefHandler");

const createWeeklyChef = async (req, res) => {
  try {
    const result = await weeklyChefHandler.createWeeklyChef(req.body);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const changeWeeklyChef = async (req, res) => {
  try {
    const result = await weeklyChefHandler.changeWeeklyChef(req.body);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const getWeeklyChef = async (req, res) => {
  try {
    const result = await weeklyChefHandler.getWeeklyChef();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const getWeeklyChefRestaurants = async (req, res) => {
  try {
    const result = await weeklyChefHandler.getWeeklyChefRestaurants();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = {
  createWeeklyChef,
  changeWeeklyChef,
  getWeeklyChef,
  getWeeklyChefRestaurants,
};
