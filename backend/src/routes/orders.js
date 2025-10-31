// src/routes/orders.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Product = require('../models/Product');
const auth = require('../middleware/auth');

// create order (protected)
router.post('/', auth, async (req, res) => {
  try {
    const { items, address } = req.body; // items: [{ product: id, qty }]
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ msg: 'No items provided' });
    }
    if (!address || typeof address !== 'string') {
      return res.status(400).json({ msg: 'Address is required' });
    }

    const populatedItems = [];
    let total = 0;

    // Validate each item, check stock and compute total
    for (const it of items) {
      if (!it.product || !it.qty || it.qty <= 0) {
        return res.status(400).json({ msg: 'Each item must have product id and qty > 0' });
      }

      const p = await Product.findById(it.product);
      if (!p) {
        return res.status(400).json({ msg: `Product not found: ${it.product}` });
      }

      if (p.stock < it.qty) {
        return res.status(400).json({ msg: `Insufficient stock for ${p.name}` });
      }

      // Prepare order item
      populatedItems.push({
        product: p._id,
        name: p.name,
        qty: it.qty,
        price: p.price,
      });

      total += p.price * it.qty;

      // Decrease stock (note: this is simple - for production use transactions or optimistic locking)
      p.stock = p.stock - it.qty;
      await p.save();
    }

    // Create and save order
    const order = new Order({
      user: req.user._id,
      items: populatedItems,
      total,
      address,
      status: 'Pending',
    });

    await order.save();

    // Optionally populate product/user data before returning
    const savedOrder = await Order.findById(order._id).populate('user', 'name email');

    return res.status(201).json(savedOrder);
  } catch (err) {
    console.error('Create order error:', err);
    return res.status(500).json({ msg: 'Server error while creating order' });
  }
});

// get my orders
router.get('/my', auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    return res.json(orders);
  } catch (err) {
    console.error('Get my orders error:', err);
    return res.status(500).json({ msg: 'Server error while fetching orders' });
  }
});

// admin: list all orders (protect with admin auth in production)
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('user', 'name email').sort({ createdAt: -1 });
    return res.json(orders);
  } catch (err) {
    console.error('List orders error:', err);
    return res.status(500).json({ msg: 'Server error while listing orders' });
  }
});

// update status (admin)
router.put('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const allowed = ['Pending', 'Packed', 'Out for Delivery', 'Delivered', 'Cancelled'];
    if (!allowed.includes(status)) return res.status(400).json({ msg: 'Invalid status' });

    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ msg: 'Order not found' });

    order.status = status;
    await order.save();

    return res.json(order);
  } catch (err) {
    console.error('Update order status error:', err);
    return res.status(500).json({ msg: 'Server error while updating order status' });
  }
});

module.exports = router;
