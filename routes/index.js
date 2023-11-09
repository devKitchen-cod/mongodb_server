var express = require('express');
var router = express.Router();
const country_controller = require('../controller/countriesController')
// http://localhost:8080/
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

const airport_controller = require("../controller/airportsController")
router.post('/createAirport', airport_controller.createAirport)
router.get('/getAllAirports', airport_controller.getAllAirports)
router.get('/getAirportById/:id', airport_controller.getAirportById)
router.delete('/deleteCity/:id', airport_controller.deleteAirport)
router.put('/updateCity/:id', airport_controller.updateAirport)

const place = require('../controller/placeController')
router.get('/getAllPlaces', place.getAllPlaces)

const ticket_controller = require('../controller/ticketController')
router.post('/createTicket', ticket_controller.createTicket)
router.get('/getAllTickets', ticket_controller.getAllTickets)
router.get('/getTicketById/:id', ticket_controller.getTicketById)
router.delete('/deleteTicket', ticket_controller.deleteTicket)

router.get('/useTransaction', ticket_controller.useTransaction)

const search = require('../controller/searchController')
router.post('/searchAirport', search.searchAirport)
router.post('/searchCountry', search.searchCountry)
router.post('/searchCity', search.searchCity)
// router.post
module.exports = router;
