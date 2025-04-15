'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.removeColumn('tarefas', 'status');

        await queryInterface.addColumn('tarefas', 'status', {
            type: Sequelize.ENUM('aberta', 'em andamento', 'concluida'),
            allowNull: false,
            defaultValue: 'aberta',
        });
  },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('tarefas', 'status');

        await queryInterface.addColumn('tarefas', 'status', {
            type: Sequelize.ENUM('aberto', 'em andamento', 'concluido'),
            allowNull: false,
            defaultValue: 'aberto',
        });
  }
};
