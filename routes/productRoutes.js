const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const upload = require('../config/cloudinary');

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

// @desc    Crear un producto nuevo CON IMAGEN
// @route   POST /api/products
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const { name, price, category, description } = req.body;
        
        // Multer sube la imagen a Cloudinary y nos deja la URL en req.file.path
        const imageUrl = req.file ? req.file.path : ''; 

        const newProduct = new Product({
            name,
            price,
            imageUrl, 
            category,
            description,
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.log("fallo la carga >>>>>>>> ")
        console.error("🔴 ERROR EN CLOUDINARY:", JSON.stringify(error, null, 2));
        
        if (!error.message) console.error("🔴 ERROR CRUDO:", error);

        res.status(500).json({ 
            message: 'Error al guardar producto', 
            detalle: error.message || error 
        });
    } 
});

module.exports = router;