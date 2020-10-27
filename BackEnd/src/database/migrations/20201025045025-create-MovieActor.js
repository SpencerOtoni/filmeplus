module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MovieActor', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      movie_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Movies', key: 'id' },
        onUpdate: 'CASCADE',
        OnDelete: 'SET NULL',
        allowNull: false,
      },
      actor_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Actors', key: 'id' },
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
    await queryInterface.dropTable('MovieActor');
  },
};
