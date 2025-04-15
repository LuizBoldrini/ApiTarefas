'use strict';

module.exports = (sequelize, DataTypes) => {
    const Conjunto = sequelize.define('Conjunto', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: true
        },
        usuarioId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'conjuntos',
        timestamps: true,
    });
    Conjunto.associate = function (models) {
        Conjunto.belongsTo(models.Usuario, {
            foreignKey: 'usuarioId',
            as: 'usuario'
        });
    Conjunto.hasMany(models.Tarefa, {
        foreignKey: 'conjuntoId',
        as: 'tarefas'
    });
    };
    return Conjunto;
}