//Configuration  
module.exports = {
    HOST: 'us-cdbr-east-06.cleardb.net',
    USER: 'b379fa74e8095b',
    PASSWORD: '4ed7fdeb',
    DB: 'heroku_bb11943fd493f0e',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
// mysql://b379fa74e8095b:4ed7fdeb@us-cdbr-east-06.cleardb.net/heroku_bb11943fd493f0e?reconnect=true