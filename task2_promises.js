const Provider = require('./Provider');

function findCity(long, lat) {
    return Provider.findCity(long, lat);
}

function getWeather(long, lat) {
    return findCity(long, lat)
        .then(city => Provider.getWeather(city))
}

function getWeatherAndCurrency(long, lat) {
    return findCity(long, lat)
        .then(city => Promise.all([
            Provider.getWeather(city),
            Provider.getLocalCurrency(city)
        ]))
        .then(([weather, currency]) => Promise.resolve(`${weather} and ${currency}`))
}

function test() {
    console.log('Task2_promises');

    const long = 51.5074, lat = 0.1278;

    findCity(long, lat)
        .then(console.log);

    getWeather(long,lat)
        .then(console.log)

    getWeatherAndCurrency(long,lat)
        .then(console.log)
}

module.exports = {
    findCity,
    getWeather,
    getWeatherAndCurrency,
    test
}
