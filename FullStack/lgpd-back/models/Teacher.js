
import DataTypes from "sequelize";
import sequelize from "../utils/database";

// definindo a tabela, nomes, entidades, tipos etc tuso esta compativel com o banco:

const Teachers = sequelize.define('teachers', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  
}, {underscored:true});
export default Teacher;