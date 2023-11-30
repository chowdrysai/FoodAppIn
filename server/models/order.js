const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    uuid: { type: String, required: true },
    userUuid: { type: String, required: true },
    itemUuid: { type: String, required: true },
    quantity: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    item_price: { type: Number, required: true },
    total_price: { type: String, required: true },
    status: {
        type: String,
        enum: ['delivered', 'inProgress'],
        default: 'inProgress'
    }
});
orderSchema.set('timestamps', true);
module.exports = mongoose.model('order', orderSchema);