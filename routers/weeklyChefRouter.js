const weeklyChefRouter = require("express").Router();
const weeklyChefController = require("../controllers/weeklyChefController");

weeklyChefRouter.post("/", weeklyChefController.createWeeklyChef);
weeklyChefRouter.get("/", weeklyChefController.getWeeklyChef);
weeklyChefRouter.get("/res", weeklyChefController.getWeeklyChefRestaurants);
weeklyChefRouter.put("/", weeklyChefController.changeWeeklyChef);

module.exports = { weeklyChefRouter };
