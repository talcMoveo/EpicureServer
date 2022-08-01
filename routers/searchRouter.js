const searchRouter = require("express").Router();
const searchController = require("../controllers/searchController");

searchRouter.get("/", searchController.getSearch);
searchRouter.post("/", searchController.postSearch);

module.exports = { searchRouter };
