
'use-strict';
var http = require('http');
var JSON = require('JSON');

var data;

// Print out error messages 
function printError(error) {
   console.error(error.message);
}

function getData(city) {
    
    // HTTP Request for weather
    var request = http.get("http://api.openweathermap.org/data/2.5/weather?q="
                           + city, function(response) {
        
        console.log("STATUS: " + response.statusCode);
        response.setEncoding('utf8');
        
        var body = "";
        
        response.on('data', function(jsonBody) {
           body += jsonBody;
        });
        
        response.on('end', function() {
            
            if (response.statusCode == 200) {
                try {
                    data = JSON.parse(body);
                    console.log(data.weather[0].description);
                    
                    return data;
                } catch (error) {
                    printError(error);
                }
            } else {
                printError({ message: "Error: " + http.STATUS_CODES[response.statusCode] });   
            }
        });
    });
    
    // Connection Error
    request.on('error', printError);
    
}

module.exports.getData = getData;