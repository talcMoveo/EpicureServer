const restaurantsHandler = require("../Handlers/restaurantsHandler");

const addRestaurant = async (req, res) => {
  try {
    restaurant = {
      ...req.body,
    };
    const result = await restaurantsHandler.postRestaurant(restaurant);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = { addRestaurant };
