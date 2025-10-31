const express = require('express');
const Product = require('../models/Product');
const router = express.Router();


// list + query
router.get('/', async (req, res) => {
const { q, category } = req.query;
const filter = {};
if (q) filter.name = { $regex: q, $options: 'i' };
if (category) filter.category = category;
const products = await Product.find(filter).limit(100);
res.json(products);
});

// get by id
router.get('/:id', async (req, res) => {
const p = await Product.findById(req.params.id);
if (!p) return res.status(404).json({ msg: 'Not found' });
res.json(p);
});


// create (admin) - simple unauth example (add auth later)
router.post('/', async (req, res) => {
const { name, description, price, stock, category, imageURL } = req.body;
const product = new Product({ name, description, price, stock, category, imageURL });
await product.save();
res.json(product);
});

// update stock
router.put('/:id/stock', async (req, res) => {
const { stock } = req.body;
const p = await Product.findByIdAndUpdate(req.params.id, { stock }, { new: true });
res.json(p);
});


module.exports = router;