const restaurantsRouter = require("express").Router();
const restaurantsController = require("../controllers/restaurantsController");

module.exports = { restaurantsRouter };

restaurantsRouter.post("/", restaurantsController.addRestaurant);
restaurantsRouter.get("/:id", restaurantsController.getRestaurant);
restaurantsRouter.patch("/:id", restaurantsController.updateRestaurant);
restaurantsRouter.delete("/:id", restaurantsController.deleteRestaurant);