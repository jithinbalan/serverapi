const db = require('../models')


// Create Main Model
const City = db.cities

// 1. Create City

const addCity = async (req, res) => {

    let cityData = {
        city_name: req.body.cityname,
        country: req.body.country,
        state: req.body.state,
        tourist_rating: req.body.touristrating,
        date_established: req.body.dateestablished,
    }

    const city = await City.create(cityData)
    res.status(200).send(city)
    console.log(city)
}



// 2. get all products

const getAllCities = async (req, res) => {

    let cities = await City.findAll({})
    res.status(200).send(cities)

}

// 3. get single product

const getOneCity = async (req, res) => {
    console.log("getOneCity")
    let id = req.params.id
    let city = await City.findOne({ where: { id: id }})
    res.status(200).send(city)

}

// 4. update Product

const updateCity = async (req, res) => {

    let id = req.params.id
    let cityData = {
        city_name: req.body.cityname,
        country: req.body.country,
        state: req.body.state,
        tourist_rating: req.body.touristrating,
        date_established: req.body.dateestablished,
    }
    const city = await City.update(cityData, { where: { id: id }})

    res.status(200).send(city)
   

}

// 5. delete product by id

const deleteCity = async (req, res) => {

    let id = req.params.id
    
    await City.destroy({ where: { id: id }} )

    res.status(200).send('City is deleted !')

}

module.exports = {
    addCity,
    getAllCities,
    getOneCity,
    updateCity,
    deleteCity,
}