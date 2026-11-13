const Nota = require('../models/Nota');

// funcion GET: sirve para obtener todas las notas que se cr3ean 
const obtenerNotas = async (req, res) => {
  try {
    const notas = await Nota.find();
    res.json(notas);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

// funcion POST: es para crear una nota nueva 
const crearNota = async (req, res) => {
  try {
    const nuevaNota = new Nota({
      titulo: req.body.titulo,
      contenido: req.body.contenido
    });
    const notaGuardada = await nuevaNota.save();
    res.status(201).json(notaGuardada);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

module.exports = { obtenerNotas, crearNota };