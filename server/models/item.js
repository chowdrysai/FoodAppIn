const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    uuid: {type: String, required: true},
    name: { type: String,required:true },
    description: { type: String },
    image: { type: String },
    category: {
        type: String,
        required:true,
        enum: ['starters', 'maincourse', 'desserts', 'cooldrinks'],
    },
    price: { type: Number ,required:true}
});
foodSchema.set('timestamps', true);
module.exports = mongoose.model('items', foodSchema);