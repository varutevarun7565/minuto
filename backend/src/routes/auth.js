const express = require('express');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();


// register
router.post('/register', [
body('name').notEmpty(),
body('email').isEmail(),
body('password').isLength({ min: 6 }),
], async (req, res) => {
const errors = validationResult(req);
if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
const { name, email, password } = req.body;
try {
let user = await User.findOne({ email });
if (user) return res.status(400).json({ msg: 'User exists' });
const salt = await bcrypt.genSalt(10);
const passwordHash = await bcrypt.hash(password, salt);
user = new User({ name, email, passwordHash });
await user.save();
const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
res.json({ token });
} catch (err) {
console.error(err);
res.status(500).send('Server error');
}
});

// login
router.post('/login', [
body('email').isEmail(),
body('password').exists(),
], async (req, res) => {
const errors = validationResult(req);
if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
const { email, password } = req.body;
try {
const user = await User.findOne({ email });
if (!user) return res.status(400).json({ msg: 'Invalid credentials' });
const isMatch = await bcrypt.compare(password, user.passwordHash);
if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
res.json({ token });
} catch (err) {
console.error(err);
res.status(500).send('Server error');
}
});

// profile
const auth = require('../middleware/auth');
router.get('/me', auth, (req, res) => {
res.json(req.user);
});


module.exports = router;