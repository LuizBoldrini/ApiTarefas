const { Usuario } = require('../models');

module.exports = {
    async cadastarUsuario(req, res) {
        try {
            const usuario = await Usuario.create(req.body);
            res.status(201).json(usuario);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao realizar cadastro.' });
        }
    },

    async acessar(req, res) {
        try {
            const { email, senha } = req.body;
            const usuario = await Usuario.findOne({ where: { email, senha } });
            if (!usuario) {
                return res.status(401).json({ error: 'Email ou senha incorretos!' });
            }
            res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

}