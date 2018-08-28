let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

let campgrounds = [
    {name: "Mevaseret Zion", image: "https://www.photosforclass.com/download/flickr-534082362"},
    {name: "Kastel", image: "https://farm9.staticflickr.com/8010/7436786986_9972800b37.jpg"},
    {name:"Ateret", image: "https://www.photosforclass.com/download/flickr-3753652230"},    {name: "Mevaseret Zion", image: "https://www.photosforclass.com/download/flickr-534082362"},
    {name: "Kastel", image: "https://farm9.staticflickr.com/8010/7436786986_9972800b37.jpg"},
    {name:"Ateret", image: "https://www.photosforclass.com/download/flickr-3753652230"},    {name: "Mevaseret Zion", image: "https://www.photosforclass.com/download/flickr-534082362"},
    {name: "Kastel", image: "https://farm9.staticflickr.com/8010/7436786986_9972800b37.jpg"},
    {name:"Ateret", image: "https://www.photosforclass.com/download/flickr-3753652230"},    {name: "Mevaseret Zion", image: "https://www.photosforclass.com/download/flickr-534082362"},
    {name: "Kastel", image: "https://farm9.staticflickr.com/8010/7436786986_9972800b37.jpg"},
    {name:"Ateret", image: "https://www.photosforclass.com/download/flickr-3753652230"}
];

app.get('/', (req, res) => {
    res.render("landing")
});

app.get('/campgrounds', (req, res) => {
    res.render("campgrounds", {campgrounds});
});

app.post("/campgrounds", (req, res) => {
    let name = req.body.name;
    let imageUrl = req.body.image;
    let newCampground = {name, image:imageUrl};
    campgrounds.push(newCampground);
    res.redirect('/campgrounds');
});

app.get("/campgrounds/new", (req, res) => {
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, () => {
    console.log("The Yelpcamp server has started!!!");
});