const { Tarefa } = require('../models');

module.exports = {
    async listar(req, res) {
        try {
            const { conjunto_id } = req.params;
            const tarefas = await Tarefa.findAll({ where: { conjunto_id } });
            res.json(tarefas);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar tarefas' });
        }
    },
    async criar(req, res) {
        try {
            const tarefa = await Tarefa.create(req.body);
            res.status(201).json(tarefa);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao criar tarefa' });
        }
    },
    async edtiarNome(req, res) {
        try {
            const { id } = req.params;
            const { nome } = req.body;
            const tarefa = await Tarefa.findByPk(id);
            if (!tarefa) {
                return res.status(404).json({ error: 'Tarefa n�o encontrada' });
            }
            tarefa.nome = nome;
            await tarefa.save();

            res.status(200).json(tarefa);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao atualizar tarefa' });
        }
    },

    async alterarStatus(req, res) {
        try {
            const { id } = req.params;
            const { status } = req.body;

            const tarefa = await Tarefa.findByPk(id);
            if (!tarefa) {
                return res.status(404).json({ error: 'Tarefa n�o encontrada' });
            }
            tarefa.status = status;
            await tarefa.save();

            res.status(200).json(tarefa);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao atualizar tarefa' });
        }
    },

    async deletar(req, res) {
        try {
            const { id } = req.params;
            const tarefa = await Tarefa.findByPk(id);
            if (!tarefa) {
                return res.status(404).json({ error: 'Tarefa n�o encontrada' });
            }
            await tarefa.destroy();
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar tarefa' });
        }
    },
}