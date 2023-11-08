const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  code: { type: String },
  place_type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PlaceSchema",
    required: true,
  },
  airport_id_from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AirportSchema",
    required: true,
  },
  airport_id_to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AirportSchema",
    required: true,
  },
  from_city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CitySchema",
    required: true,
  },
  to_city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CitySchema",
    required: true,
  },
  price: { type: Number },
});

module.exports = mongoose.model("TicketSchema", TicketSchema);
