import Sequelize, { Model } from 'sequelize';

class Writers extends Model {
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
      through: 'MovieWriter',
      foreignKey: 'writers_id',
      as: 'writer',
    });
  }
}

export default Writers;
