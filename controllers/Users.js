const { insert,listAll,loginUser } = require("../services/Users");
const httpStatus = require("http-status");
const { passwordTpHash, generateAccessToken,generateRefreshToken } = require("../scripts/utils/helper")




const create = (req, res) => {
    req.body.password =passwordTpHash(req.body.password);
    insert(req.body)
        .then((response) => {
           
            res.status(httpStatus.CREATED).send(response);
        })
        .catch((e) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
        });
   
};


const list = (req, res) => {
    listAll().then((response) => {
        res.status(httpStatus.OK).send(response);

    }).catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e))
};


const login = (req,res) =>{
    req.body.password = passwordTpHash(req.body.password);
  loginUser(req.body)
      .then((user) => {
          if(!user) return  res.status(httpStatus.NOT_FOUND).send({message : "Bu şekilde bir kullanıcı bulunamadı.."})

          user = {
              ...user.toObject(),
              tokens : {
                 access_token : generateAccessToken(user),
                 refresh_token : generateRefreshToken(user),

              }
          };
          delete user.password;
          res.status(httpStatus.OK).send(user)
      })
      .catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
};

module.exports = {
    create,
    list,
    login
}
