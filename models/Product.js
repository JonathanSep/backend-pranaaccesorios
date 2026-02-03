const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String, // Aquí guardarás la URL que te retorne Cloudinary
        required: true
    },
    stock: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true // Crea automáticamente campos createdAt y updatedAt
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;