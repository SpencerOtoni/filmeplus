import Sequelize, { Model } from 'sequelize';

class Actors extends Model {
  public id?: number;

  public name: string;

  public readonly createdAt?: Date;

  public readonly updatedAt?: Date;

  static init(sequelize: Sequelize.Sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models: any) {
    this.belongsToMany(models.Movie, {
      through: 'MovieActor',
      foreignKey: 'actor_id',
      as: 'actor',
    });
  }
}

export default Actors;
