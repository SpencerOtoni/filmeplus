import Sequelize, { Model } from 'sequelize';

class MovieActor extends Model {
  public id?: number;

  public movie_id: number;

  public actor_id: number;

  public readonly createdAt?: Date;

  public readonly updatedAt?: Date;

  static init(sequelize: Sequelize.Sequelize) {
    super.init(
      {
        movie_id: Sequelize.INTEGER,
        actor_id: Sequelize.INTEGER,
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
    this.belongsToMany(models.Actors, {
      foreignKey: 'actor_id',
    });
  }
}

export default MovieActor;
