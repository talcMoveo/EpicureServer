const chefsRouter = require("express").Router();
const chefsController = require("../controllers/chefsController");

chefsRouter.post("/", chefsController.addChef);
chefsRouter.get("/", chefsController.getAllChefs);
chefsRouter.get("/:id", chefsController.getChef);
chefsRouter.patch("/activate/:id", chefsController.activateChef);
chefsRouter.patch("/:id", chefsController.updateChef);
chefsRouter.delete("/:id", chefsController.deleteChef);

module.exports = { chefsRouter };
