const chefModel = require("../schemes/chefScheme").ChefModel;
const dishModel = require("../schemes/dishScheme").DishModel;
const restaurantModel = require("../schemes/restaurantScheme").RestaurantModel;

const getSearchRes = async (qureyParams) => {
    // why do I have name and age in the query?
    if (Array.isArray(qureyParams.name)) {
        qureyParams.name.pop('tal');
        if (qureyParams.name.length === 1) {
            qureyParams.name = qureyParams.name[0];
        }
    }
    delete qureyParams.age;
    
    console.log(qureyParams);

    for (const param in qureyParams) {
        console.log('param: ', qureyParams[param]);
        let regExStr = new RegExp(".*" + qureyParams[param] + ".*");
        qureyParams[param] = regExStr;
    }

    const [chefRes, dishRes, restaurantRes] = await Promise.all(
            [
                chefModel.find(qureyParams),
                dishModel.find(qureyParams),
                restaurantModel.find(qureyParams)
            ]
        );

    return ({
        chefResults : chefRes,
        dishResults : dishRes,
        restaurantResults : restaurantRes
    });
    
}

const getSearchResOld = async (searchWord) => {
    const regExStr = new RegExp(".*" + searchWord + ".*");

    const [chefRes, dishRes, restaurantRes] = await Promise.all(
            [
                chefModel.find({ name : regExStr }),
                dishModel.find({ name : regExStr }),
                restaurantModel.find({ name : regExStr })
            ]
        );

    return ({
        chefResults : chefRes,
        dishResults : dishRes,
        restaurantResults : restaurantRes
    });
}

module.exports = { getSearchRes };
