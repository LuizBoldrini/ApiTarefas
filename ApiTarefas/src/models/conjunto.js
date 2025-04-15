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
        usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'conjuntos',
        timestamps: true,
    });
    Conjunto.associate = function (models) {
        Conjunto.belongsTo(models.Usuario, {
            foreignKey: 'usuario_id',
            as: 'usuario'
        });
    Conjunto.hasMany(models.Tarefa, {
        foreignKey: 'conjunto_id',
        as: 'tarefas'
    });
    };
    return Conjunto;
}