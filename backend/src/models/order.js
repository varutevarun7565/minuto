const mongoose = require('mongoose');


const orderItemSchema = new mongoose.Schema({
product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
name: String,
qty: Number,
price: Number,
});


const orderSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
items: [orderItemSchema],
total: Number,
status: { type: String, enum: ['Pending','Packed','Out for Delivery','Delivered','Cancelled'], default: 'Pending' },
address: String,
}, { timestamps: true });


module.exports = mongoose.model('Order', orderSchema);