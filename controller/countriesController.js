const CountrySchema = require("../models/CountrySchema");

module.exports.createCountry = async function (req, res) {
  const { name, country_code } = req.body; // Параметры для создания новой страны
  try {
    const newCountry = await CountrySchema.create({
      name: name,
      country_code: country_code,
    });
    res.json(newCountry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creating a new country" });
  }
};

module.exports.getAllCountries = async function (req, res) {
  try {
    const country = await CountrySchema.find({});
    res.json(country);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "Error retrieving data from countries table" });
  }
};

module.exports.getCountryById = async function (req, res) {
  const { params: id } = req;
  console.log(id.id)
  if (!id) return res.status(404).json({ message: "ID is required" });
  try {
    const country = await CountrySchema.findById(id.id);
    console.log("[country]", country);
    res.json(country);
  } catch (error) {
    console.log(error);
    return res.status(500).json(JSON.stringify(error));
  }
};

module.exports.deleteCountry = async function (req, res) {
  const { params: countryId } = req;
  console.log(countryId)
  try {
    const deletedCountry =await CountrySchema.findOneAndDelete(countryId.id)
    //  await CountrySchema.deleteOne( countryId.id);
    res.json(deletedCountry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error deleting country" });
  }
};

module.exports.updateCountry = async function (req, res) {
  const {
    body: data,
    params: { id },
  } = req;
  try {
    const updatedCountry = await CountrySchema.findOneAndUpdate(
      { _id: id }, // Фильтр для поиска страны по названию
      { $set: {name: data.name} }, // Обновляемые данные
    );
    console.log(updatedCountry)
    res.json(updatedCountry)
  } catch (error) {
    console.log(error);-
    res.status(500).json({ error: "Error updating country" });
  }
};
