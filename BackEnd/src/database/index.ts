import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class Database {
  public connection: Sequelize.Sequelize;

  constructor() {
    this.init();
  }

  init(): void {
    this.connection = new Sequelize.Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

// const database: Database = new Database();

export default new Database();
