import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Post from '../models/Post';
import User from '../models/User';
import Category from '../models/Category';

// Importar os Models

const models = [User, Post, Category];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
