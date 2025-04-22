const { Usuario } = require('../models');

module.exports = {
    async cadastarUsuario(req, res) {
        try {
            const usuario = await Usuario.create(req.body);
            return res.status(201).json(usuario);
        } catch (error) {
            if (error.name === 'SequelizeValidationError') {
                return res.status(400).json({ error: error.errors.map(err => err.message) });
            }
            if (error.name === 'SequelizeUniqueConstraintError') {
                return res.status(409).json({ error: 'Email em uso, informe outro email!' });
            }
        }
            
            return res.status(500).json({ error: 'Erro interno do servidor.' });
        },

    async acessar(req, res) {
        try {
            const { email, senha } = req.body;
            const usuario = await Usuario.findOne({ where: { email, senha } });
            if (!usuario) {
                return res.status(401).json({ error: 'Email ou senha incorretos!' });
            }
            return res.status(200).json(usuario);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
}