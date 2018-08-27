let express = require("express");
let app = express();

// main route - /
app.get("/", (req, res) => {
    res.send("Hi there");
});

app.get("/dog", (req, res) => {
    console.log("someone said me")
    res.send("Meow!");
});

/* when we use this route pattern "/:" follow by a name, we define a subroute
    a sub route means that what ever route name the user will use after the / will redirect him to this route.
    - for example: /r/ness OR /r/yael OR /r/geffen will redirect user to the following route
    - if user use this pattern "/p/asdasd/comments" - it wont work because its a different pattern
*/
app.get("/r/:subroute", (req, res) => {
    //the way to see the user subroute value is trough req.params:
    res.send("Welcome to " + req.params.subroute.toUpperCase() +" sub route");
    console.log(req.params); //will print the user subroute value in the consle
});

/*
    - "/r/bokoness/comments/1213/football" - this pattern will redirect user to our route
    - "/r/yaek/comments/1214/hairstyle" - this pattern will work as well
    - "/r/bokoness/DOGS/1214/hairstyle" - this pettern WONT work
*/
app.get("/r/:subroute/comments/:id/:title/", (req, res) => {
   res.send("Welcome to the comments page"); 
});

/* default route, if user request /anything that isn't defined it will send him this route 
    - IMPORTANT! the default route should be the last route, because if it will be the first one - none of the routs will work
*/
app.get("*", (req, res) => {
    res.send("THIS IS THE DEFAULT ROUTE")
})
 
 // process.end are the enviroment variables of Cloud9
 app.listen(process.env.PORT, process.env.IP);