import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

const User = connection.define("user", {
	user_id: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING(128),
		allowNull: false
	},
	email: {
		type: DataTypes.STRING(128),
		allowNull: false,
		unique: true
	},
	password: {
		type: DataTypes.STRING(80),
		allowNull: false
	},
	role: {
		type: DataTypes.ENUM("admin", "user"),
		allowNull: false,
		defaultValue: "user"
	}
})

export default User;