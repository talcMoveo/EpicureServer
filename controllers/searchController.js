const searchHandler = require("../handlers/searchHandler");

const getSearch = async (req, res) => {
  try {
    const result = await searchHandler.getSearchRes(req.query);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const postSearch = async (req, res) => {
  try {
    const result = await searchHandler.postSearchRes(req.body.input);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = { getSearch, postSearch };
