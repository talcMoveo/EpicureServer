const chefsRouter = require("express").Router();
const chefsController = require("../controllers/chefsController");

module.exports = { chefsRouter };

chefsRouter.post("/", chefsController.addChef);
