let express = require("express");
let app = express();

app.get("/", (req, res) => {
    res.send("Hi there");
});

app.get("/bye", (req, res) => {
    res.send("Bye");
});

app.get("/dog", (req, res) => {
    console.log("someone said me")
    res.send("Meow!");
});
 
 
 
 // process.end are the enviroment variables of Cloud9
 app.listen(process.env.PORT, process.env.IP);