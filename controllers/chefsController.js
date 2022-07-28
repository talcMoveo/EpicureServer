const chefsHandler = require("../Handlers/chefsHandler");

const addChef = async (req, res) => {
  try {
    chef = {
      ...req.body,
    };
    const result = await chefsHandler.postChef(chef);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = { addChef };
