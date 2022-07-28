const chefModel = require("../schemes/chefScheme").ChefModel;
const dishModel = require("../schemes/dishScheme").DishModel;
const restaurantModel = require("../schemes/restaurantScheme").RestaurantModel;

const getSearchRes = async (searchWord) => {
    const regExStr = new RegExp(".*" + searchWord + ".*");
    const chefRes = await chefModel.find({ name : regExStr });
    const dishRes = await dishModel.find({ name : regExStr });
    const restaurantRes = await restaurantModel.find({ name : regExStr });
    return ({
        chefResults : chefRes,
        dishResults : dishRes,
        restaurantResults : restaurantRes
    });
}

module.exports = { getSearchRes };
