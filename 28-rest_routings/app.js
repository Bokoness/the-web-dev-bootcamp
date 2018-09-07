let express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose");

//app config
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//Mongoose/model config
let blogSchema = new mongoose.Schema({
    title: String,
    image: String, 
    body: String,
    created: {type: Date, default: Date.now} //definning default value
});
let Blog = mongoose.model("Blog", blogSchema);

Blog.create({
    title: "Test BLog",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e79d1986f31127432328ba0b78f0b510&auto=format&fit=crop&w=500&q=60",
    body: "Hello this is a blog post"
});

//RESTFULL ROUTES
app.get("/", (req, res) => {
    res.redirect("/blogs");
});

app.get("/blogs", (req, res) => {
    Blog.find({}, (err, blogs) => {
        if(err)
            console.log(err);
        else {
            res.render("index", {blogs});    
        };    
    });
});

app.listen(3000, () => console.log('Restfull App is running'))
// app.listen(process.env.PORT, process.env.IP, () => {
//     console.log("Server is running");
// });