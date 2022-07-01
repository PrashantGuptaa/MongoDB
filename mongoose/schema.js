const mongoose = require("mongoose");

const vegetableSchema = mongoose.Schema({
    name: { type: String, required: true },
    sellingPrice: Number,
    costPrice: Number,
    imported_date: String,
    discount: Number,
})

module.exports = {
    vegetableSchema
}