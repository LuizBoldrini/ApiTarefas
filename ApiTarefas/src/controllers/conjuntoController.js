const { Conjunto } = require('../models');

module.exports = {
    async listar(req, res) {
        try {
            const { usuarioId } = req.params;
            const conjuntos = await Conjunto.findAll({
                where: { usuarioId: parseInt(usuarioId, 10) },
                order: [['id', 'ASC']],
            });

            if (conjuntos.length === 0) {
                return res.status(404).json({ message: 'Nenhum conjunto encontrado!' });
            }

            return res.status(200).json(conjuntos);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    },

    async criar(req, res) {
        try {
            const conjunto = await Conjunto.create(req.body);
            res.status(201).json(conjunto);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao criar conjunto!' });
        }
    },

    async atualizar(req, res) {
        try {
            const { id } = req.params;
            const { descricao } = req.body;

            const conjunto = await Conjunto.findByPk(id);
            if (!conjunto) {
                return res.status(404).json({ error: 'Nenhum conjunto encontrado!' });
            }
            conjunto.descricao = descricao;
            await conjunto.save();

            res.status(200).json(conjunto);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao atualizar conjunto!' });
        }
    },

    async deletar(req, res) {
        try {
            const { id } = req.params;
            const conjunto = await Conjunto.findByPk(id);
            if (!conjunto) {
                return res.status(404).json({ error: 'Nenhum conjunto encontrado!' });
            }
            await conjunto.destroy();
            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao deletar conjunto!' });
        }
    },
}