const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// @desc    Obtener todos los productos
// @route   GET /api/products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos' });
    }
});

// @desc    Crear un producto nuevo
// @route   POST /api/products
router.post('/', async (req, res) => {
    try {
        const { name, description, price, category, imageUrl, stock } = req.body;

        const product = new Product({
            name,
            description,
            price,
            category,
            imageUrl,
            stock
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear producto', error });
    }
});

module.exports = router;