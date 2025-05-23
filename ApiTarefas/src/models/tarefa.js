'use strict';

module.exports = (sequelize, DataTypes) => {
    const Tarefa = sequelize.define('Tarefa', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Sem descricao',
        },
        status: {
            type: DataTypes.ENUM('Aberta', 'Em andamento', 'Completa'),
            allowNull: false,
            defaultValue: 'Aberta',
        },
        conjuntoId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        tableName: 'tarefas',
        timestamps: true,
    });
    Tarefa.associate = function (models) {
        Tarefa.belongsTo(models.Conjunto, {
            foreignKey: 'conjuntoId',
            as: 'conjuntos'
        });
    };
    return Tarefa;
}