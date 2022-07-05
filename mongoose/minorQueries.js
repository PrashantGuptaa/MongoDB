const { default: mongoose } = require("mongoose");
const connectionWithMongoose = require("./connection");
const { vegetableSchema } = require("./schema");

const vegetableModel = mongoose.model('vegetables', vegetableSchema );

const findAllWithMongooseWithLimitAndSkip = async () => {
    try {
        await connectionWithMongoose();
        const result = await vegetableModel.find({ costPrice: 10 }).limit(2).skip(1);

        console.log("Successfully fetched the record with limit", result);
    } catch (e) {
        console.error("error while inserting record", e);
    }
}

const findAllWithMongooseWithSorting = async () => {
    try {
        await connectionWithMongoose();
        const result = await vegetableModel.find().sort({ name: -1 });

        console.log("Successfully fetched the record with limit", result);
    } catch (e) {
        console.error("error while inserting record", e);
    }
}
module.exports = {
    findAllWithMongooseWithLimitAndSkip,
    findAllWithMongooseWithSorting
}
