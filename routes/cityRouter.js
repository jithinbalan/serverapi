const router = require('express').Router()
// User Defined Controllers

const adminController = require('../controllers/adminController.js')

// Use Routers

// Products Router
router.post('/addCity', adminController.addCity)

router.get('/allCities', adminController.getAllCities)


router.get('/:id', adminController.getOneCity)

router.put('/:id', adminController.updateCity)

router.delete('/:id', adminController.deleteCity)

module.exports = router