module.exports = (sequelize, DataTypes) => {

    const City = sequelize.define("cities", {
        city_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },       
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tourist_rating: {
            type: DataTypes.INTEGER
        },
        estimated_population: {
            type: DataTypes.INTEGER
        },
        currency: {
            type: DataTypes.STRING
        },
        date_established: { 
            type: DataTypes.DATE, 
            defaultValue: DataTypes.NOW 
        }
    })

    return City

}