const http = require('http');

function printInfo(name, des, temp){
    const msg = 
    `It is ${name} city. The temperature here is ${temp}. Plus, ${des}`;
    console.log(msg);
}

function getCityWeather(cityName){
    var apiKey = '6c63674e05ce46b4a77a95cd6b29f078';
    var link = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&APPID='+apiKey;
    
    const request = http.get(link, (res) => {
        if(res.statusCode !== 200){
            console.log("Something wrong happened. Status code: " + res.statusCode);
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
                  console.log(e.message);
                }
            });
        }
        
    });
}

var cities = process.argv.slice(2);

cities.forEach(getCityWeather);





