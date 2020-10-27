module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Movies', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      note: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url_image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' },
        onUpdate: 'CASCADE',
        OnDelete: 'SET NULL',
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
    await queryInterface.dropTable('Movies');
  },
};
