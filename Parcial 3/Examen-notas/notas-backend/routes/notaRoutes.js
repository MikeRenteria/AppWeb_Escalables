//archivo que tiene las rutas necesarias para los controladores el get y el post
const express = require('express');
const router = express.Router();
const { obtenerNotas, crearNota } = require('../controllers/NotaController');

router.get('/', obtenerNotas);
router.post('/', crearNota);

module.exports = router;