const chefsHandler = require("../Handlers/chefsHandler");

const addChef = async (req, res) => {
  try {
    const result = await chefsHandler.addChef(req.body);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const getChef = async (req, res) => {
  try {
    const result = await chefsHandler.getChef(req.params.id);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const updateChef = async (req, res) => {
  try {
    const result = await chefsHandler.updateChef(req.params.id, req.body);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const deleteChef = async (req, res) => {
  try {
    const result = await chefsHandler.deleteChef(req.params.id);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = { addChef, getChef, updateChef, deleteChef };
