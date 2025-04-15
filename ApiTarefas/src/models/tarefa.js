'use strict';

module.exports = (sequelize, DataTypes) => {
    const Tarefa = sequelize.define('Tarefa', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.ENUM('aberto', 'em andamento', 'concluindo'),
            allowNull: false,
            defaultValue: 'aberto',
        },
        conjunto_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        tableName: 'tarefas',
        timestamps: true,
    });
    Tarefa.associate = function (models) {
        Tarefa.belongsTo(models.Conjunto, {
            foreignKey: 'conjunto_id',
            as: 'conjunto'
        });
    };
    return Tarefa;
}