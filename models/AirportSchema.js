const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AirportSchema = new Schema({
  name: { type: String, required: true },
  city: { type: Schema.Types.ObjectId, ref: "CitySchema" },
  country: { type: Schema.Types.ObjectId, ref: "CountrySchema" },
  iata_code: { type: String, required: true},
  icao_code: {type: String, required: true},
});

module.exports = mongoose.model("AirportSchema", AirportSchema);
