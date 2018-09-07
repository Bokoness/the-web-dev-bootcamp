var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

// POST - schema
var postSchema = new mongoose.Schema({
   title: String,
   content: String
});
// POST - model
var Post = mongoose.model("Post", postSchema);

// USER - schema
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema] //This line is the embeding, adding posts from postSchema, to the userSchema
});
// USER - model
var User = mongoose.model("User", userSchema);

var newUser = new User({
    email: "hermione@hogwarts.edu",
    name: "Hermione Granger"
});
// adding data to the user's post
newUser.posts.push({
    title: "How to bre polyjuice potion",
    content: "Just kidding.  Go to potions class to learn it!"
});

newUser.save(function(err, user){
  if(err){
      console.log(err);
  } else {
      console.log(user);
  }
});

var newPost = new Post({
    title: "Reflections on Apples",
    content: "They are delicious"
});

newPost.save(function(err, post){
    if(err){
        console.log(err);
    } else {
        console.log(post);
    }
});

//finding Hermione and pushing data
User.findOne({name: "Hermione Granger"}, function(err, user){
    if(err){
        // console.log(err);
    } else {
        user.posts.push({
            title: "3 Things I really hate",
            content: "Voldemort.  Voldemort. Voldemort"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});