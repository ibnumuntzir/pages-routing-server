'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lecturers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      subject: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('lecturers');
  }
};