const Joi = require("joi");

const  createValidation = Joi.object({
    title : Joi.string().required().min(3),
    description: Joi.string().required().min(8)
});


module.exports ={
  createValidation,
};
