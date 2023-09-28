const { Model, DataTypes } = require("sequelize");

class Movie extends Model {
    static init(connection){
        super.init({
          title: DataTypes.STRING,
          poster: DataTypes.STRING,
          overview: DataType.TEXT,
        }
        );
        {
            sequelize:connection;
            schema:"public";
            tableName: "movies";
            createdAt: "criadoEm";
            updatedAt: "atualizadoEm";
            timestamps: true;
            underscored: false;
        }
    }
}

module.exports = Movie;