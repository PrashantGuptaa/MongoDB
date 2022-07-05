const { default: mongoose } = require("mongoose");
const connectionWithMongoose = require("./connection");
const { vegetableSchema } = require("./schema");

const vegetableModel = mongoose.model('vegetables', vegetableSchema );

const insertOneWithMongoose = async () => {
    try {
        await connectionWithMongoose();
        const veg = vegetableModel({
            name: "MMy-Potato",
            sellingPrice: 30,
            costPrice: 10,
            discount: 0,
            imported_date: (new Date()).toISOString()
        })

        const result = await veg.save();

        console.log("Successfully created the record", result);
    } catch (e) {
        console.error("error while inserting record", e);
    }
}

const insertManyWithMongoose = async () => {
    try {
        await connectionWithMongoose();
        const veg1 = vegetableModel({
            name: "Veg1",
            sellingPrice: 30,
            costPrice: 10,
            discount: 0,
            imported_date: (new Date()).toISOString()
        })
        const veg2 = vegetableModel({
            name: "Veg-2",
            sellingPrice: 30,
            costPrice: 10,
            discount: 0,
            imported_date: (new Date()).toISOString()
        })

        const insertArr = [veg1, veg2];
        const result = await vegetableModel.insertMany(insertArr);

        console.log("Successfully created the record", result);
    } catch (e) {
        console.error("error while inserting record", e);
    }
}
 
module.exports = { insertOneWithMongoose, insertManyWithMongoose };