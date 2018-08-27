let express = require("express");
let app = express();

// Visiting / should print "Hi there, welcome to my assignment!"
app.get("/", (req, res) => {
   res.send("Hi there, welcome to my assignment!");
});

/*
    Visiting "/speak/pig" should print "The pig says 'Oink'" 
    Visiting "/speak/cow" should print "The cow says 'Moo'"
    Visiting "/speak/dog" should print "The dog says 'Woof Woof!'"
*/
app.get("/speak/:animal", (req, res) => {
    let str = "";
    switch(req.params.animal) {
        case "pig":
            str = "The pig says 'Oink' ";
            break;
        case "cow":
            str = "The cow says 'Moo'";
            break;
        case "dog":
            str = "The the dog says 'Woof Woof!";
            break;
        default: 
            str = "No such animal";
    };
    res.send(str);
});

/*
    Visiting "/repeat/hello/3" should print "hello hello hello"
    Visiting "/repeat/hello/5" should print "hello hello hello hello hello" 
*/
app.get("/repeat/hello/:number", (req, res) => {
    let str = "";
    for(let i=0; i < req.params.number; i++) {
        str += 'Hello ';
    }
    res.send(str); 
});

//Visiting "/repeat/blah/2" should print "blah blah"
app.get("/repeat/blah/:number", (req, res) => {
    let str = "";
    for(let i=0; i < req.params.number; i++) {
        str += 'blah ';
    }
    res.send(str); 
});

//If a user visits any other route, print: "Sorry, page not found...What are you doing with your life?"
app.get("*", (req, res) => {
   res.send("Sorry, page not found...What are you doing with your life?"); 
});

app.listen(process.env.PORT, process.env.IP);