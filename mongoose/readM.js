const { default: mongoose } = require("mongoose");
const connectionWithMongoose = require("./connection");
const { vegetableSchema } = require("./schema");

const vegetableModel = mongoose.model('vegetables', vegetableSchema );

const findAllWithMongoose = async () => {
    try {
        await connectionWithMongoose();
        const result = await vegetableModel.find();

        console.log("Successfully created the record", result);
    } catch (e) {
        console.error("error while inserting record", e);
    }
}

const findOneWithMongoose = async () => {
    try {
        await connectionWithMongoose();
        const result = await vegetableModel.findOne({name: 'Cabbage' });

        console.log("Successfully created the record", result);
    } catch (e) {
        console.error("error while inserting record", e);
    }
}

module.exports = {
    findAllWithMongoose,
    findOneWithMongoose
}