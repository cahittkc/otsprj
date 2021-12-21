const httpStatus = require("http-status");
const JWT = require("jsonwebtoken");



const authenticateToken = (req,res,next) => {
  const autHeader = req.headers.authorization;

  const token = autHeader && autHeader.split(" ")[1]
    if(!token) {
        return res.status(httpStatus.UNAUTHORIZED).send({error: "Lütfen ilk önce giriş yapınız..."})
    }

    JWT.verify(token,process.env.ACCESS_TOKEN_SECRET_KEY, (err,user) => {
       if(err) return res.status(httpStatus.FORBIDDEN).send({error: "Token süresi geçmiş..."});
       req.user = user?._doc;
        next();
    });

};


module.exports = authenticateToken;



