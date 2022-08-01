const dishesRouter = require("express").Router();
const dishesController = require("../controllers/dishesController");

dishesRouter.post("/", dishesController.addDish);
dishesRouter.get("/", dishesController.getDishList);
dishesRouter.get("/:id", dishesController.getDish);
dishesRouter.patch("/activate/:id", dishesController.activateDish);
dishesRouter.patch("/:id", dishesController.updateDish);
dishesRouter.delete("/:id", dishesController.deleteDish);

module.exports = { dishesRouter };
