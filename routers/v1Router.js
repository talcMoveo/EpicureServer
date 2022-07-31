const v1Router = require("express").Router();

const chefsRouter = require("./chefsRouter").chefsRouter;
const restaurantsRouter = require("./restaurantsRouter").restaurantsRouter;
const dishesRouter = require("./dishesRouter").dishesRouter;
const searchRouter = require("./searchRouter").searchRouter;

v1Router.use("/chefs", chefsRouter);
v1Router.use("/restaurants", restaurantsRouter);
v1Router.use("/dishes", dishesRouter);
v1Router.use("/search", searchRouter);

module.exports = { v1Router };
