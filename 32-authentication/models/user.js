let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");


let UserSchema = new mongoose.Schema({
    username: String,
    passport: String
});


//adding methods to ourt userschema
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);