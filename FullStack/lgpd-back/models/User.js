
import DataTypes from "sequelize";
import sequelize from "../utils/database";

// definindo a tabela, nomes, entidades, tipos etc tuso esta compativel com o banco:

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: DataTypes.STRING,
    gener: DataTypes.STRING,
    profile_picture: DataTypes.STRING,  
}, {underscored:true});
export default User;