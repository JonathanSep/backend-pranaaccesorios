const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(cors()); // Permite peticiones de otros dominios
app.use(express.json()); // Permite leer JSON del body (req.body)

// Rutas
app.use('/api/products', productRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API de Gigi Accesorios funcionando...');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});