const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

router.get('/conjunto/:conjunto_id', tarefaController.listar);
router.post('/', tarefaController.criar);
router.put('/nome/:id', tarefaController.edtiarNome);
router.put('/status/:id', tarefaController.alterarStatus);
router.delete('/:id', tarefaController.deletar);

module.exports = router;