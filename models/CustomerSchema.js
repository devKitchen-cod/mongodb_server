const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});
module.exports = mongoose.model("CustomerSchema", CustomerSchema);