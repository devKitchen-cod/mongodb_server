const CountrySchema = require("../models/CountrySchema");
const CitySchema = require("../models/CitySchema");
module.exports.createCity = async function (req, res) {
  const {
    body: { name: name, city_code: city_code },
    params: {id}
  } = req; // Параметры для создания нового города
  try {
    console.log(id)
    const findedCountry = await CountrySchema.findById(id);
    console.log(findedCountry)
    const createdCity = await CitySchema.create({
      name: name,
      country: findedCountry._id,
      city_code: city_code,
    });
    res.json(createdCity);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error creating a new city" });
  }
};

module.exports.getAllCities = async function (req, res) {
  try {
    const cities = await CitySchema.find({});
    return res.json({ cities });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ error: "Error retrieving data from cities table" });
  }
};
module.exports.getCityById = async function (req, res) {
  const { params: id } = req;
console.log(id)
  try {
    const city = await CitySchema.findById(id.id);
    res.json(city);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error retrieving data from cities table" });
  }
};

module.exports.deleteCity = async function (req, res) {
  const { params: cityId } = req;
  console.log(cityId.id)
  try {
    const deletedCity = await CitySchema.deleteOne({_id: cityId.id}); //findOneAndDelete
    res.json(deletedCity);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error deleting city" });
  }
};

module.exports.updateCity = async function (req, res) {
  const {
    body: data,
    params: { id },
  } = req;
  console.log(data, id)
  try {
    const updatedCity = await CitySchema.findOneAndUpdate(
      { _id: id}, // Фильтр для поиска страны по названию
      { $set: { name: data.name } }, // Обновляемые данные
    );

    console.log(updatedCity)

    res.json(updatedCity)
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error updating city" });
  }
};
