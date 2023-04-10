const Joi = require("@hapi/joi");

const itemSchema = Joi.object({
    name : Joi.string().required(),
    description : Joi.string().required(),
    category : Joi.string().required(),
    image : Joi.string().required(),
    price : Joi.number().required(),
});
module.exports = { itemSchema };