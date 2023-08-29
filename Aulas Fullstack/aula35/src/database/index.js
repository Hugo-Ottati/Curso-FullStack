const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Movie = require("../model/Movie");
Movie.init(connection);

module.exports = connection;