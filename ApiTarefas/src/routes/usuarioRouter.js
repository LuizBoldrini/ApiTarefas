const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/cadastrar', usuarioController.cadastarUsuario);
router.get('/acessar', usuarioController.acessar);

module.exports = router;