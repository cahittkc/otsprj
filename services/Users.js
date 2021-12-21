const User = require("../models/User")


const insert = (userData) => {
    // veritabanı kayıt
    const user = new User(userData);
    return user.save();
    
};

const listAll = () => {
   return User.find({});
};

const loginUser = (loginData) =>{
    return User.findOne(loginData);
}




module.exports = {
    insert,
    listAll,
    loginUser,
};
