const dishesRouter = require("express").Router();
const dishesController = require("../controllers/dishesController");

module.exports = { dishesRouter };

dishesRouter.post("/", dishesController.addDish);
dishesRouter.get("/getDishes", dishesController.getDishList);