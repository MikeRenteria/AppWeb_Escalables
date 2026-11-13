// Js que se utiliza para levantar la conexion usando mongoose hacia mongodb
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const notaRoutes = require('./routes/notaRoutes');

const app = express();

app.use(cors());          // permite que Angular (puerto 4200) hable con el servidor
app.use(express.json());  // permite leer JSON en el body

app.use('/api/notas', notaRoutes);

mongoose.connect('mongodb://localhost:27017/notasdb')
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
  })
  .catch(err => console.error('Error al conectar:', err));