const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
    name: {type: String},
    code:{type: String}
})

module.exports = mongoose.model("PlaceSchema", PlaceSchema);