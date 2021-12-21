const Mongoose = require("mongoose");


const UserSchema = Mongoose.Schema({
    firstName: String,
    lastName: String,
    password : {type:String,trim: true},
    email: {type: String, unique: true, trim:true},
    profile_image: String
}, {versionKey: false, timestamps: true});

module.exports = Mongoose.model("user", UserSchema);
