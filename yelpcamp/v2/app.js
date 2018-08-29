let express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require('mongoose');

//connect mongoose
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

//SCHEMA SETUP
let campgroudSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String
});

let Campground = mongoose.model("Campground", campgroudSchema);

// Campground.create({
//     name: "Ateret",
//     image: "https://www.photosforclass.com/download/flickr-3753652230",
//     description: "Yeshuv male bemitnahalim"
// }, (err, campground) => {
//     if(err)
//         console.log(err);
//     else {
//         console.log("Newly created campground: ");
//         console.log(campground);
//     }
// });

app.get('/', (req, res) => {
    res.render("landing")
});

app.get('/campgrounds', (req, res) => {
    //Get all campgrounds from DB
    Campground.find({}, (err, allCampgrounds) => {
        if(err)
            console.log(err);
        else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    })

});

app.post("/campgrounds", (req, res) => {
    let name = req.body.name;
    let imageUrl = req.body.image;
    let desc = req.body.description;
    let newCampground = {name, image:imageUrl, description:desc};
    //Create a new campground and save to DB
    Campground.create(newCampground, (err, newCampground) => {
        if(err) 
            console.log(err);
        else {
            res.redirect('/campgrounds');  
        }
    })
});

app.get("/campgrounds/new", (req, res) => {
    res.render("new.ejs");
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", (req, res) => {
    //find the campground with provided ID
    let id = req.params.id;
    Campground.findById(id, (err, foundCampground) => {
        if(err) 
            console.log(err);
        else {
            //render show template
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.log("The Yelpcamp server has started!!!");
});