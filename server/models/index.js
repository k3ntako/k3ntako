const Sequelize = require('sequelize');
const sequelize = new Sequelize('k3ntako_development', null, null, {
  host: 'localhost',
  dialect: 'postgres',
});

const models = {
  User: sequelize.import('./user'),
  Project: sequelize.import('./project'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

module.exports = {
  models,
  sequelize,
};
