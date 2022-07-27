const restaurantsRouter = require("express").Router();
const restaurantsController = require("../controllers/restaurantsController");

module.exports = { restaurantsRouter };

restaurantsRouter.post("/", restaurantsController.addRestaurant);