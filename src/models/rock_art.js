import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

const Rock_art = connection.define("rock_art", {
	rock_art_id: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true
	},
	name: {
		type: DataTypes.STRING(128),
		allowNull: false
	},
	image: {
		type: DataTypes.STRING(300),
		allowNull: false
	},
	latitude: {
		type: DataTypes.DECIMAL(10,8),
		allowNull: false
	},
	longitude: {
		type: DataTypes.DECIMAL(11,8),
		allowNull: false
	},
	period: {
		type: DataTypes.STRING(45),
		allowNull: false
	},
	information: {
		type: DataTypes.STRING(300),
		allowNull: false
	},
	web: {
		type: DataTypes.STRING(128)
	},
	council_id: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false
	}
});

export default Rock_art;