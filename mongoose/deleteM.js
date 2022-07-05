const { default: mongoose } = require("mongoose");
const connectionWithMongoose = require("./connection");
const { vegetableSchema } = require("./schema");

const vegetableModel = mongoose.model('vegetables', vegetableSchema);

const deleteOneWithMongoose = async () => {
    try {
        await connectionWithMongoose();
        const result = await vegetableModel.deleteOne({ "name" : "Veg-2" });
        console.log("Result", result);
    } catch (e) {
        console.error(e);
    }
}

const deleteManyWithMongoose = async () => {
    try {
        await connectionWithMongoose();
        const result = await vegetableModel.deleteMany({ "name" : "Potato" });
        console.log("Result", result);
    } catch (e) {
        console.error(e);
    }
}

module.exports = {
    deleteOneWithMongoose,
    deleteManyWithMongoose
}