var express = require('express');
var router = express.Router();
const country_controller = require('../controller/countriesController')
// http://localhost:8080/updateCity
router.post('/createCountry', country_controller.createCountry);
router.get('/getAllCountries', country_controller.getAllCountries);
router.post('/getCountryById/:id', country_controller.getCountryById);
router.delete('/deleteCountry/:id', country_controller.deleteCountry);
router.put('/updateCountry/:id', country_controller.updateCountry);

const city_controller = require('../controller/citiesController')
router.post('/createCity/:id', city_controller.createCity)
router.get('/getAllCities', city_controller.getAllCities)
router.get('/getCityById/:id', city_controller.getCityById)
router.delete('/deleteCity/:id', city_controller.deleteCity)
router.put('/updateCity/:id', city_controller.updateCity )
module.exports = router;
