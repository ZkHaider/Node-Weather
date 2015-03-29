

var data = require("./weather.js");
var cities = process.argv.slice(2);
cities.forEach(data.getData);