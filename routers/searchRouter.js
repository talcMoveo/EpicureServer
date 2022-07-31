const searchRouter = require("express").Router();
const searchController = require("../controllers/searchController");

module.exports = { searchRouter };

searchRouter.get("/", searchController.getSearch);

// searchRouter.post("/", searchController.getSearch);
