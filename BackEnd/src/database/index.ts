import Sequelize from 'sequelize';

import User from '../app/models/User';
import Movie from '../app/models/Movie';
import Actors from '../app/models/Actors';
import Directors from '../app/models/Directors';
import Writers from '../app/models/Writers';
import MovieActor from '../app/models/MovieActor';
import MovieDirector from '../app/models/MovieDirector';
import MovieWriter from '../app/models/MovieWriter';

import databaseConfig from '../config/database';

const models = [
  User,
  Movie,
  Actors,
  Directors,
  Writers,
  MovieActor,
  MovieDirector,
  MovieWriter,
];

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
