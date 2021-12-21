const Joi = require("joi");


const createValidation = Joi.object({
    firstName:Joi.string().required().min(3),
    lastName:Joi.string().required().min(3),
    password :Joi.string().required().min(6),
    email:Joi.string().required().email(),

})
const loginValidation = Joi.object({
    password :Joi.string().required().min(6),
    email:Joi.string().required().email(),

})


module.exports ={
    createValidation,
    loginValidation
}
