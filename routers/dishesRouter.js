const dishesRouter = require("express").Router();
const dishesController = require("../controllers/dishesController");

module.exports = { dishesRouter };

dishesRouter.post("/", (req, res) => {dishesController.addDish});
dishesRouter.get("/", (req, res) => {dishesController.getDishesList});