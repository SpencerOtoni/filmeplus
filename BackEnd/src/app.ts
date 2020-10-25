import express from 'express';
import routes from './routes';

import './database';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  middleware(): void {
    this.server.use(express.json());
  }

  routes(): void {
    this.server.use(routes);
  }
}

// const app: App = new App().server;

export default new App().server;
