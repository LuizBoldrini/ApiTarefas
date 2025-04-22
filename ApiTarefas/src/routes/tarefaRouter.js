const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

router.get('/:conjuntoId', tarefaController.listar);
router.post('/cadastrar', tarefaController.criar);
router.put('/editar/:id', tarefaController.edtiarNome);
router.put('/editar/status/:id', tarefaController.alterarStatus);
router.delete('/:id', tarefaController.deletar);

module.exports = router;