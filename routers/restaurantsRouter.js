const restaurantsRouter = require("express").Router();
const restaurantsController = require("../controllers/restaurantsController");

restaurantsRouter.post("/", restaurantsController.addRestaurant);
restaurantsRouter.get("/:id", restaurantsController.getRestaurant);
restaurantsRouter.patch("/activate/:id", restaurantsController.activateRestaurant);
restaurantsRouter.patch("/:id", restaurantsController.updateRestaurant);
restaurantsRouter.delete("/:id", restaurantsController.deleteRestaurant);

module.exports = { restaurantsRouter };
