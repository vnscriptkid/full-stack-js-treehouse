const http = require('http');

function printInfo(name, des, temp){
    const msg = 
    `It is ${name} city. The temperature here is ${temp}. Plus, ${des}`;
    console.log(msg);
}

function printError(error){
    console.error(error.message);
}

function get(cityName){
    var apiKey = '6c63674e05ce46b4a77a95cd6b29f078';
    var link = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&APPID='+apiKey;
    
    try {
        const request = http.get(link, (res) => {
            if(res.statusCode !== 200){
                const message = 'There was an error for ' + cityName + ' ('+http.STATUS_CODES[res.statusCode]+')';
                const statusCodeError = new Error(message);
                printError(statusCodeError);
            } else {
                res.setEncoding('utf8');
                let rawData = '';
                res.on('data', (chunk) => rawData += chunk);
                res.on('end', () => {
                    try {
                      const parsedData = JSON.parse(rawData);
                      let name = parsedData.name;
                      let temp = parsedData.main.temp;
                      let des = parsedData.weather[0].description;
                      printInfo(name, des, temp);
                    } catch (e) {
                      printError(e);
                    }
                });
            };
        });
        request.on('error', (error) => {
            printError(error);
        });
    } catch (error) {
        printError(error);
    }
}

module.exports.get = get;
