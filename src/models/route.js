import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

const Route = connection.define("route", {
	route_id: {
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
	comments: {
		type: DataTypes.STRING(300)
	},
	track: {
		type: DataTypes.STRING(128)
	},
	distance: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false
	},
	coordinates: {
		type: DataTypes.GEOMETRY("POINT"),
		allowNull: false,
		unique: true
	},
	time: {
		type: DataTypes.STRING(45)
	},
	origin_destination: {
		type: DataTypes.STRING(128)
	},
	council_id: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false
	}
});

export default Route;