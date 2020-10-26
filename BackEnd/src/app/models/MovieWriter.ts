import Sequelize, { Model } from 'sequelize';

class MovieWriter extends Model {
  public id?: number;

  public movie_id: number;

  public writers_id: number;

  public readonly createdAt?: Date;

  public readonly updatedAt?: Date;

  static init(sequelize: Sequelize.Sequelize) {
    super.init(
      {
        movie_id: Sequelize.INTEGER,
        writers_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models: any) {
    this.belongsToMany(models.Movies, {
      foreignKey: 'movie_id',
    });
    this.belongsToMany(models.Writers, {
      foreignKey: 'writers_id',
    });
  }
}

export default MovieWriter;