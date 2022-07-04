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
        estimated_population: req.body.estimatedpopulation,
        currency: req.body.currency,
    }

    const city = await City.create(cityData)
    res.status(200).send(city)
    console.log(city)
}



// 2. get all cities

const getAllCities = async (req, res) => {

    let cities = await City.findAll({})
    // console.log(typeof cities);
    let CityApiData = [];
    cities.forEach(city => {
        CityApiData.push({
            "id": city.id,
            "city_name": city.city_name,
            "country": city.country,
            "state": city.state,
            "tourist_rating": city.tourist_rating,
            "estimated_population": city.estimated_population,
            "currency": city.currency,
            "date_established": city.date_established.toISOString().split('T')[0],
        });
    });
    res.status(200).send(CityApiData)

}

// 3. get single city

const getOneCity = async (req, res) => {
    let id = req.params.id
    let city = await City.findOne({ where: { id: id }})

    let CityApiData = { };
        CityApiData["id"] = city.id;
        CityApiData["city_name"]= city.city_name;
        CityApiData["country"]= city.country;
        CityApiData["state"]= city.state;
        CityApiData["tourist_rating"]= city.tourist_rating;
        CityApiData["estimated_population"]= city.estimated_population;
        CityApiData["currency"]= city.currency;
        CityApiData["date_established"]= city.date_established.toISOString().split('T')[0];

    console.log(CityApiData)
    res.status(200).send(CityApiData)

}

// 4. update city

const updateCity = async (req, res) => {

    let id = req.params.id
    let cityData = {
        city_name: req.body.cityname,
        country: req.body.country,
        state: req.body.state,
        tourist_rating: req.body.touristrating,
        currency: req.body.dateestablished,
        date_established: req.body.dateestablished,

    }
    const city = await City.update(cityData, { where: { id: id }})

    res.status(200).send(city)
   

}

// 5. delete city by id

const deleteCity = async (req, res) => {

    let id = req.params.id
    
    await City.destroy({ where: { id: id }} )

    res.status(200).send('City is deleted !')

}
// 6. Get AllCities by name
const getAllCitiesByName = async (req, res) => {
    let cities = await City.findAll({ where: { city_name: req.params.cityName }})
    let CityApiData = [];
    cities.forEach(city => {
        CityApiData.push({
            "id": city.id,
            "city_name": city.city_name,
            "country": city.country,
            "state": city.state,
            "tourist_rating": city.tourist_rating,
            "estimated_population": city.estimated_population,
            "currency": city.currency,
            "date_established": city.date_established.toISOString().split('T')[0],
        });
    });
    res.status(200).send(CityApiData)

}

module.exports = {
    addCity,
    getAllCities,
    getOneCity,
    updateCity,
    deleteCity,
    getAllCitiesByName
}