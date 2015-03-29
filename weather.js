
'use-strict';
var http = require('http');
var JSON = require('JSON');


function getWeather(city) {
    
    // HTTP Request for weather
    var request = http.get("http://api.openweathermap.org/data/2.5/weather?q="
                           + city, function(response) {
        
        console.log("STATUS: " + response.statusCode);
        response.setEncoding('utf8');
        
    });
    
}

module.exports.getWeather = getWeather;