let express = require("express");
let app = express();

//telling express to serve all public directory to user (which contains stylesheets and js files usually)
app.use(express.static("public"));

app.get("/", (req, res) => {
    //res.render - sending a file instead
    res.render("home.ejs");
});

app.get("/fallinglovewith/:thing", (req, res) => {
   let thing = req.params.thing;
   res.render("love.ejs", {thingVar: thing});
});

app.get("/posts", (req, res) => {
    let posts = [
        {title: "Post1", author: "Susy"},
        {title: "My bunny", author: "Bony"},
        {title: "Lama hashem?", author: "Ness"}
    ];
    res.render("posts.ejs", {posts});
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Server is Listenning!!!");
});