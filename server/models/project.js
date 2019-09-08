const Sequelize = require('sequelize');
const project = (sequelize, DataTypes) => {
  const Project = sequelize.define('project', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      defaultValue: Sequelize.UUIDV1,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    githubURL: {
      type: DataTypes.STRING,
      unique: true,
    },
    demoURL: {
      type: DataTypes.STRING,
      unique: true,
    },
    startDate: {
      type: DataTypes.DATEONLY,
    },
    endDate: {
      type: DataTypes.DATEONLY,
    },
    technologies: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  });
  return Project;
};

module.exports = project;
