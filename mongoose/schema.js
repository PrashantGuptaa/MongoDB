const mongoose = require("mongoose");

const vegetableSchema = mongoose.Schema({
    name: { type: String, required: true },
    sellingPrice: Number,
    costPrice: Number,
    imported_date: String,
    discount: Number,
    data: Object,
    myObj: Object,
})

module.exports = {
    vegetableSchema
}