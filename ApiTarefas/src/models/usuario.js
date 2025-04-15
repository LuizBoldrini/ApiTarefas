'use strict';

module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        tableName: 'usuarios',
        timestamps: false,
        underscored: true
    });

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Conjunto, {
            foreignKey: 'usuarioId',
            as: 'conjuntos'
        });
    };

    return Usuario;
}