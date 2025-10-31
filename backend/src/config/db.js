const mongoose = require('mongoose');


const connectDB = async () => {
const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/minuto';
try {
await mongoose.connect(uri, {
useNewUrlParser: true,
useUnifiedTopology: true,
});
console.log('MongoDB connected');
} catch (err) {
console.error(err.message);
process.exit(1);
}
};


module.exports = connectDB;