/* **********************************************|
|                   MONGOOSE                     |
|  Elegant MongoDB object modeling for Node.js   |
*************************************************/

let mongoose = require("mongoose");
//connect mogoose to database  "mongodb://localhost/<name of database>"
mongoose.connect("mongodb://localhost/cat_app");

// CREATING A SCHEMA
let catSchema = new mongoose.Schema({
   name:  String,
   age: Number,
   temperament: String
});

//taking the cat schema and compile it into a model.
// mongoose will create a collection in plural, in our example - "Cats"
let Cat = mongoose.model("Cat", catSchema);

// creating an instanse of the data
let dinno = new Cat({
    name: "Dinno",
    age: 11,
    temperament: "Sleepy"
});

// saving the data  
// params: cat - is the data that coms back from DB
dinno.save((err, cat) => {
    if(err) {
        console.log("Somthing went wrong");
    } else {
        console.log("We just save a cat to database");
        console.log(cat);
    }
});

// a method that create an instance and saves it at once (best practice)
Cat.create({
   name: "Snowy",
   age: 15,
   temperament: "Nice"
}, (err, cat) => {
    if(err)
        console.log(err);
    else {
        console.log(cat)
    }
});

//retrieve all cats from the DB and console.log each one
Cat.find({}, (err, cats) => {
    if(err) {
        console.log("Oh no, error!");
        console.log(err);
    } else {
        console.log("All the cats...");
        console.log(cats);
    }
})

