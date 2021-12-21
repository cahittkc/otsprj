const { insert,listAll } = require("../services/Lessons");
const httpStatus = require("http-status");


const create = (req, res) => {
    console.log(req.user)
 req.body.user_id = req.user
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


module.exports = {
    create,
    list,
}
