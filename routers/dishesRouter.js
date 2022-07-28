const dishesRouter = require("express").Router();
const dishesController = require("../controllers/dishesController");

module.exports = { dishesRouter };

dishesRouter.post("/", dishesController.addDish);
dishesRouter.get("/", dishesController.getDishList);
dishesRouter.get("/:id", dishesController.getDish);
dishesRouter.patch("/:id", dishesController.updateDish);
dishesRouter.delete("/:id", dishesController.deleteDish);
