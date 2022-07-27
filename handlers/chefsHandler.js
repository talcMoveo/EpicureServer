const chefModel = require("../schemes/chefScheme").ChefModel;

const postChef = async (data) => {
  return chefModel.create(data);
};

module.exports = { postChef };