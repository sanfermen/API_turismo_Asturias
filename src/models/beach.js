import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

// TODO beachs?
const Beach = connection.define("beach", {
	beach_id: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING(128),
		allowNull: false
	},
	image: {
		type: DataTypes.STRING(128),
		allowNull: false
	},
	information: {
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
	services: {
		type: DataTypes.STRING(255),
		allowNull: false
	},
	beach_type: {
		type: DataTypes.STRING(128),
		allowNull: false
	},
	council_id: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false
	}
});

export default Beach;