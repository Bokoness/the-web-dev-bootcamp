//yahoo weather api - https://developer.yahoo.com/weather/?guccounter=1

let request = require("request");

let apiUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

request(apiUrl, (err, res, body) => {
    if(!err && res.statusCode == 200) {
        console.log("The sunset time in Hawai...")
        let parsedData = JSON.parse(body);
        console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]);
    };
});
