

var weather = require("./weather.js");
var cities = process.argv.slice(2);
cities.forEach(weather.getWeather);