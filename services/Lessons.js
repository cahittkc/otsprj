const Lesson = require("../models/Lessons")


const insert = (lessonData) => {
    // veritabanı kayıt
    const lesson = new Lesson(lessonData);
    return lesson.save();
    
};

const listAll = () => {
   return Lesson.find({}).populate({
       path: "user_id",
       select: "firstName lastName email"
   });
};




module.exports = {
    insert,
    listAll,
};
