import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

// Importar os Models

const models = [];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
