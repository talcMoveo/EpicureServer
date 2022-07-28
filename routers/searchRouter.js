const searchRouter = require("express").Router();
const searchController = require("../controllers/searchController");

module.exports = { searchRouter };

searchRouter.post("/", searchController.getSearch);
