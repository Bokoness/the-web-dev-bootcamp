let express = require("express");
let app = express();
let bodyParser = require("body-parser");

//telling express to use body-parser package
app.use(bodyParser.urlencoded({extended: true}));
//defines that default filename will be ejs
app.set("view engine", "ejs");

let friends = ["Ness", "Yael", "Geffen", "Ozzi", "Benaboomboom"];

app.get("/", (req, res) => {
    res.render("postApp");
});

//will show the friends list
app.get("/friends", (req, res) => {
    res.render("friends", {friends}); 
});

//will add a new friend
app.post("/addfriend", (req, res) => {
    let newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.listen(process.env.PORT , process.env.IP, () => {
    console.log("Server started!!!");
});

