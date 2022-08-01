const chefModel = require("../schemes/chefScheme").ChefModel;

const addChef = (data) => {
  return chefModel.create(data);
};

const getChef = (chefId) => {
  return chefModel.findById(chefId);
};

const updateChef = (chefId, newData) => {
  return chefModel.findByIdAndUpdate(chefId, newData);
};

const deleteChef = (chefId) => {
  return chefModel.findByIdAndUpdate(chefId, { active: false });
};

const activateChef = (chefId) => {
  return chefModel.findByIdAndUpdate(chefId, { active: true });
};

module.exports = { addChef, getChef, updateChef, deleteChef, activateChef };
