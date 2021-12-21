const Mongoose = require("mongoose");
const logger = require("../scripts/logger/Lessons.")

const LessonSchema = new Mongoose.Schema({
    title: String,
    description: String,
    user_id: {
        type: Mongoose.Types.ObjectId,
        ref: "user"
    },

},{versionKey : false, timestamps:true});


// LessonSchema.pre("save", (doc,next) =>{
//     console.log("öncesi",doc)
//     next();
// })

LessonSchema.post("save", (doc) =>{
   logger.log({
       level: "info",
       message: doc,
   });

})

module.exports = Mongoose.model("lesson", LessonSchema);
