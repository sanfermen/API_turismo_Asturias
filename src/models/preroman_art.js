import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

const Preroman_art = connection.define("preroman_art", {
	preroman_art_id: {
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
	unesco_heritage: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: false
	},
	information: {
		type: DataTypes.STRING(300)
	},
	web: {
		type: DataTypes.STRING(128)
	},
	address: {
		type: DataTypes.STRING(128)
	},
	council_id: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false
	}
});

export default Preroman_art;