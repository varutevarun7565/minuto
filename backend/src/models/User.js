const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
name: { type: String, required: true },
email: { type: String, required: true, unique: true },
passwordHash: { type: String, required: true },
role: { type: String, enum: ['user','admin','delivery'], default: 'user' },
addresses: [{ label: String, address: String }],
}, { timestamps: true });


module.exports = mongoose.model('User', userSchema);