const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const multer = require('multer'); 

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(cors()); 
app.use(express.json()); 

// Rutas
app.use('/api/products', productRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API de Gigi Accesorios funcionando...');
});

app.use((err, req, res, next) => {
    console.error("🔥 ERROR CAPTURADO EN EL INDEX:", JSON.stringify(err, null, 2));

    if (err instanceof multer.MulterError) {
        return res.status(400).json({ 
            message: 'Error de subida (Multer)', 
            error: err.code,
            field: err.field
        });
    } else if (err) {
        return res.status(500).json({ 
            message: 'Error interno del servidor', 
            error: err.message || err 
        });
    }
    next();
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});