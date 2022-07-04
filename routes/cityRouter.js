const router = require('express').Router()
// User Defined Controllers

const adminController = require('../controllers/adminController.js')

// Use Routers

// City Router
router.get('/getCities/:cityName', adminController.getAllCitiesByName)
module.exports = router