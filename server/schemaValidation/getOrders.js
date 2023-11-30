const Joi = require('@hapi/joi');

const getOrderSchema = Joi.object({
    status: Joi.string().valid('all', 'inProgress', 'delivered').required()
});
module.exports = { getOrderSchema };