const chefsHandler = require("../Handlers/chefsHandler");

const addChef = async (req, res) => {
  try {
    chef = {
      ...req.body,
    };
    const result = await chefsHandler.postChef(chef);
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failure",
      message: error,
    });
  }
};

module.exports = { addChef };