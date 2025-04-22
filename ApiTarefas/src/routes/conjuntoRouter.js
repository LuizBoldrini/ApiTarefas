const express = require('express');
const router = express.Router();
const conjuntoController = require('../controllers/conjuntoController');

router.get('/:usuarioId', conjuntoController.listar);
router.post('/cadastrar', conjuntoController.criar);
router.put('/editar/:id', conjuntoController.atualizar);
router.delete('/:id', conjuntoController.deletar);

module.exports = router;