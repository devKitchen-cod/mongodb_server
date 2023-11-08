const PlaceSchema = require("../models/PlaceSchema");

module.exports.createPlace = async function (req, res) {
  const { name, code } = req.body;
  try {
    const newPlace = await PlaceSchema.create({
      name: name,
      code: code,
    });
    res.json(newPlace);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creating a new country" });
  }
};

module.exports.getAllPlaces = async function (req, res) {
  try {
    const country = await PlaceSchema.find({});
    res.json(country);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Error retrieving data from countries table" });
  }
};

// module.exports.getCountryById = async function (req, res) {
//   const { params: id } = req;
//   console.log(id.id)
//   if (!id) return res.status(404).json({ message: "ID is required" });
//   try {
//     const country = await CountrySchema.findById(id.id);
//     console.log("[country]", country);
//     res.json(country);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json(JSON.stringify(error));
//   }
// };

// module.exports.deleteCountry = async function (req, res) {
//   const { params: countryId } = req;
//   console.log(countryId)
//   try {
//     const deletedCountry =await CountrySchema.deleteOne({_id: countryId.id})
//     //  await CountrySchema.deleteOne( countryId.id);
//     res.json(deletedCountry);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Error deleting country" });
//   }
// };

// module.exports.updateCountry = async function (req, res) {
//   const {
//     body: data,
//     params: { id },
//   } = req;
//   try {
//     const updatedCountry = await CountrySchema.findOneAndUpdate(
//       { _id: id }, // Фильтр для поиска страны по названию
//       { $set: {name: data.name} }, // Обновляемые данные
//     );
//     console.log(updatedCountry)
//     res.json(updatedCountry)
//   } catch (error) {
//     console.log(error);-
//     res.status(500).json({ error: "Error updating country" });
//   }
// };
