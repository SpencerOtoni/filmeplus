import Sequelize, { Model } from 'sequelize';

class Directors extends Model {
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
}

export default Directors;
