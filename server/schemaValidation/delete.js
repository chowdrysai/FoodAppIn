const Joi = require("@hapi/joi");

const  deleteUser= Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required()
})

module.exports = { deleteUser };