const Joi = require('@hapi/joi');

const statusSchema = Joi.object({
    uuid: Joi.array().items(Joi.string()).required(),
    // uuid:Joi.string().required(),
    status:Joi.string().valid('all','inProgress', 'delivered')
});
module.exports = { statusSchema};   