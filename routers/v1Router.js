const express = require("express");
const v1Router = express.Router();

const chefsRouter = require("./chefsRouter").chefsRouter;
v1Router.use("/chefs", chefsRouter);

const restaurantsRouter = require("./restaurantsRouter").restaurantsRouter;
v1Router.use("/restaurants", restaurantsRouter);

const dishesRouter = require("./dishesRouter").dishesRouter;
v1Router.use("/dishes", dishesRouter);

module.exports = { v1Router };