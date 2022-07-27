const chefsRouter = require("express").Router();
const chefsController = require("../controllers/chefsController");
// const chefModel = require("../schemes/chefScheme").ChefSchema;

module.exports = { chefsRouter };

chefsRouter.post("/", chefsController.addChef);

// chefsRouter.post("/", async (req, res) => {chefsController.addChef()});

// chefsRouter.post("/add", async (req, res) => {
//     async (request, response) => {
//         const chef = new chefModel(request.body);
      
//         try {
//           await chef.save();
//           response.send(chef);
//         } catch (error) {
//           response.status(500).send(error);
//         }
//     }
// });

