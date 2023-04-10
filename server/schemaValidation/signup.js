const Joi = require("@hapi/joi");

const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    role: Joi.string().required(),
});

module.exports = { registerSchema };