const { default: mongoose } = require("mongoose");
const connectionWithMongoose = require("./connection");
const { vegetableSchema } = require("./schema");

const vegetableModel = mongoose.model('vegetables', vegetableSchema);

const updateOneWithMongoose = async () => {
    try {
        await connectionWithMongoose();
        const result = await vegetableModel.updateOne({ "name" : "Veg-2" }, {$set: { imported_date: new Date(), sellingPrice: 500 }});
        console.log("Result", result);
    } catch (e) {
        console.error(e);
    }
}

const updateManyWithMongoose = async () => {
    try {
        await connectionWithMongoose();
        const result = await vegetableModel.updateMany({ "costPrice" : 10 }, {$set: { "myObj": { "owner": "Prashant", "country": 'India' } }});
        console.log("Result", result);
    } catch (e) {
        console.error(e);
    }
}

module.exports = {
    updateOneWithMongoose,
    updateManyWithMongoose
}