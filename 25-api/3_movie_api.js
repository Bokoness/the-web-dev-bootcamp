// the api site - http://omdbapi.com/
// apikey the wdb

let express = require("express");
let app = express();
let request = require("request");
app.set('view engine', 'ejs');

let apiUrl = 'http://www.omdbapi.com/?';
let apikey = 'thewdb';

app.get('/', (req, res) => {
    res.render("search");
});

app.get('/results', (req, res) => {
    //the user query string
    let query = req.query.search;
    let url = `${apiUrl}s=${query}&apikey=${apikey}`;
    request(url, (error, response, body) => {
        if(!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            res.render("results", {data});
        };
    });
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Movie App has started!!!");
});