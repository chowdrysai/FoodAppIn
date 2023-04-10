const Joi = require("@hapi/joi");

const postOrderSchema = Joi.array().items({
    itemUuid: Joi.string().required(),
    quantity: Joi.number().required(),
    name: Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.number().required(),
    total_price: Joi.number().required(),
    
}).required();
module.exports = { postOrderSchema };