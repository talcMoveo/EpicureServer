const chefsRouter = require("express").Router();
const chefsController = require("../controllers/chefsController");

module.exports = { chefsRouter };

chefsRouter.post("/", chefsController.addChef);
chefsRouter.get("/:id", chefsController.getChef);
chefsRouter.patch("/activate/:id", chefsController.activateChef);
chefsRouter.patch("/:id", chefsController.updateChef);
chefsRouter.delete("/:id", chefsController.deleteChef);
