const Joi =require("@hapi/joi");
const  deleteItem= Joi.object({
    itemUuid:Joi.string().required()
})

module.exports = { deleteItem };