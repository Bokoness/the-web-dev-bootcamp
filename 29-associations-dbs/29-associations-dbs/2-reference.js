
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/post"); //import Post schema
var User = require("./models/user");// import user Schema

Post.create({
  title: "How to cook the best burger pt. 4",
  content: "AKLSJDLAKSJD"
}, function(err, post){
    User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                } else {
                    console.log(data);
                }
            });
        }
    });
});

//find all posts for that user
// lecture 288, time - 10:30
User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});


User.create({
    email: "bob@gmail.com",
    name: "Bob Belcher"
});