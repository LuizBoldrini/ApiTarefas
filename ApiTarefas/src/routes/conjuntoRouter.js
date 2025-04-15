const express = require('express');
const router = express.Router();
const conjuntoController = require('../controllers/conjuntoController');

router.get('/:usuario_id', conjuntoController.listar);
router.post('/', conjuntoController.criar);
router.put('/:id', conjuntoController.atualizar);
router.delete('/:id', conjuntoController.deletar);

module.exports = router;