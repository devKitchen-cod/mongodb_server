const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
    name: {type: String},
    price: {type: Number},
    info:{type: String}
})

module.exports = mongoose.model("PlaceSchema", PlaceSchema);