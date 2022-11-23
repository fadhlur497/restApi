'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Title cant be null' },
        notEmpty: { msg: 'Title cant be empty' },
      }},
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Genre cant be null' },
        notEmpty: { msg: 'Genre cant be empty' },
      }},
    released: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Released cant be null' },
        notEmpty: { msg: 'Released cant be empty' },
      }},
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Image cant be null' },
        notEmpty: { msg: 'Image cant be empty' },
      }}
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};