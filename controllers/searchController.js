const searchHandler = require("../Handlers/searchHandler");

const getSearch = async (req, res) => {
  try {
    const result = await searchHandler.getSearchRes(req.body.input);
    console.log('req.body.input: ', req.body.input);
    console.log('result: ', result.chefResults);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = { getSearch };
