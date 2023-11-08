const AirportSchema = require("../models/AirportSchema");

module.exports.createAirport = async function (req, res) {
  const { name, cityId, countryId, iata_code, icao_code } = req.body;
  console.log(name, cityId, countryId, iata_code, icao_code);
  try {
    const createdCity = await AirportSchema.create({
      name: name,
      city: cityId,
      country: countryId,
      iata_code: iata_code,
      icao_code: icao_code,
    });
    res.json(createdCity);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creating a new airport" });
  }
};

module.exports.getAllAirports = async function (req, res) {
  try {
    const airports = await AirportSchema.find({});
    res.json(airports);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Error retrieving data from airports table" });
  }
};

module.exports.getAirportById = async function (req, res) {
  const { params: id } = req;
  console.log(id);
  try {
    const airport = await AirportSchema.findById(id.id).populate("country");
    res.json(airport);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error retrieving data from cities table" });
  }
};

// module.exports.summaryAirports = async function (req, res) {
//   const { params: id } = req;
//   try {
//     const airport = await AirportSchema.findById(id.id).populate(
//       "country",
//       "city"
//     );
//     res.json(airport);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       error: "Error retrieving data from airports and related tables",
//     });
//   }
// };

module.exports.deleteAirport = async function (req, res) {
  const { params: airportId } = req;
  try {
    const deletedAirport = await AirportSchema.deleteOne(airportId);
    res.json(deletedAirport);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error deleting airport" });
  }
};

module.exports.updateAirport = async function (req, res) {
  const {
    body: data,
    params: { id },
  } = req;
  try {
    const updatedAirport = await AirportSchema.findOneAndUpdate(
      { _id: id },
      { name: data.name }
    );
    res.json(updatedAirport);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error updating airport" });
  }
};
