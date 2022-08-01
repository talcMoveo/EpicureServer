const apiRouter = require("express").Router();
const v1Router = require("./v1Router").v1Router;

apiRouter.use("/v1", v1Router);

module.exports = { apiRouter };
