import Sequelize from 'sequelize';

import Case from '../app/models/Case';

import databaseConfig from '../config/database';

const models = [Case];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
