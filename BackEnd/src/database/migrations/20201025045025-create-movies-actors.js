module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('movies-actors', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      movie_id: {
        type: Sequelize.INTEGER,
        references: { model: 'movies', key: 'id' },
        onUpdate: 'CASCADE',
        OnDelete: 'SET NULL',
        allowNull: true,
      },
      actor_id: {
        type: Sequelize.INTEGER,
        references: { model: 'actors', key: 'id' },
        onUpdate: 'CASCADE',
        OnDelete: 'SET NULL',
        allowNull: true,
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
    await queryInterface.dropTable('movies');
  },
};
