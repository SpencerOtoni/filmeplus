import Sequelize, { Model } from 'sequelize';

class Movie extends Model {
  public id?: number;

  public name: string;

  public note: string;

  public status: boolean;

  public date: date;

  public user_id: number;

  public readonly createdAt?: Date;

  public readonly updatedAt?: Date;

  static init(sequelize: Sequelize.Sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        note: Sequelize.STRING,
        status: Sequelize.BOOLEAN,
        date: Sequelize.DATE,
        user_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models: any) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

export default Movie;
