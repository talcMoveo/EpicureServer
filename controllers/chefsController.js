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
  } catch (err) {
    console.log("err:", err);
    // console.log("req:", req);
    // console.log("res:", res);
    res.status(400).json({
      status: "Failure",
      message: {err},
    });
  }
};

module.exports = { addChef };