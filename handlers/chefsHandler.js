const chefModel = require("../schemes/chefScheme").ChefModel;

const postChef = (data) => {
  return chefModel.create(data);
};

module.exports = { postChef };
