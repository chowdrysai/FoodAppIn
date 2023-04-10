const Joi = require("@hapi/joi");

const loginSchema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
})

module.exports = { loginSchema };