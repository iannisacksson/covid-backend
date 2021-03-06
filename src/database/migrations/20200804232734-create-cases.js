module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('cases', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      count: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async queryInterface => {
    return queryInterface.dropTable('cases');
  },
};
