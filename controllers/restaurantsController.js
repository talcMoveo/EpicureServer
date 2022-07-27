const restaurantsHandler = require("../Handlers/restaurantsHandler");

const addRestaurant = async (req, res) => {
  try {
    restaurant = {
      ...req.body,
    };
    const result = await restaurantsHandler.postRestaurant(restaurant);
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: error,
    });
  }
};

module.exports = { addRestaurant };