const { conjunto } = require('../models');

module.exports = {
    async listar(req, res) {
        const { usuario_id } = req.params;
        const conjunto = await Conjunto.findAll({ where: { usuario_id } });
        req.json(conjunto);
    },

    async criar(req, res) {
        try {
            const conjunto = await Conjunto.create(req.body);
            res.status(201).json(conjunto);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao criar conjunto' });
        }
    },

    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { descricao } = req.body;

            const conjunto = await Conjunto.findByPk(id);
            if (!conjunto) {
                return res.status(404).json({ error: 'Conjunto não encontrado' });
            }
            conjunto.descricao = descricao;
            await conjunto.save();

            res.status(200).json(conjunto);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao atualizar conjunto' });
        }
    },

    async deletar(req, res) {
        try {
            const { id } = req.params;
            const conjunto = await Conjunto.findByPk(id);
            if (!conjunto) {
                return res.status(404).json({ error: 'Conjunto não encontrado' });
            }
            await conjunto.destroy();
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar conjunto' });
        }
    },
}