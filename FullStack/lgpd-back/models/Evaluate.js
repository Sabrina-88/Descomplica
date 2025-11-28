
import DataTypes from "sequelize";
import sequelize from "../utils/database";

// definindo a tabela, nomes, entidades, tipos etc tuso esta compativel com o banco:

const Evaluete = sequelize.define('evaluetions', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    concept: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {underscored:true});
export default Evaluate;