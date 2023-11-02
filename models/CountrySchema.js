const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  country_code: { type: String, required: true, unique: true },
});
module.exports = mongoose.model("CountrySchema", CountrySchema);