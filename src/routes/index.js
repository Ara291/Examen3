const express = require('express');
const router = express.Router();

const usuario = require('../data.json');

router.get('/', (req, res) => {
  res.json(usuario);
});
// servicio para crear al usuario
router.post('/', (req, res) => {
  console.log(req.body);
  const { nombre } = req.body;
  const { apellidos } = req.body;
  const { carrera } = req.body;
  const { matricula } = req.body;
  usuario.push({
    id: usuario.length + 1,
    nombre,
    apellidos,
    carrera,
    matricula
  });
  res.json('creado correctamente');
});

// servicio para actualizar al usuario
router.put('/:id', (req, res) => {
  console.log(req.body, req.params)
  const { id } = req.params;
  const { nombre } = req.body;
  const { apellidos } = req.body;
  const { carrera } = req.body;
  const { matricula } = req.body;
  usuario.forEach((user, i) => {
    if (user.id == id) {
      user.nombre = nombre,
      user.apellidos = apellidos,
      user.carrera = carrera,
      user.matricula = matricula;
    }
  });
  res.json('Actualizado Correctamente');

});
// servicio para eliminar al usuario
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  usuario.forEach((user, i) => {
    if(user.id == id) {
      usuario.splice(i, 1);
    }
  });
  res.json('Eliminado Correctamente');
});

module.exports = router;