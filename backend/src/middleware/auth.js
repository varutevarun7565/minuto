const jwt = require('jsonwebtoken');
const User = require('../models/User');


module.exports = async (req, res, next) => {
const authHeader = req.headers['authorization'];
if (!authHeader) return res.status(401).json({ msg: 'No token' });
const token = authHeader.split(' ')[1];
if (!token) return res.status(401).json({ msg: 'No token' });
try {
const payload = jwt.verify(token, process.env.JWT_SECRET);
req.user = await User.findById(payload.id).select('-passwordHash');
if (!req.user) return res.status(401).json({ msg: 'Invalid token' });
next();
} catch (err) {
console.error(err);
return res.status(401).json({ msg: 'Token error' });
}
};