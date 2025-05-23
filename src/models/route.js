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
	type: {
		type: DataTypes.ENUM("hiking", "mountain_bike", "summit", "by_car"),
		allowNull: false
	},
	information: {
		type: DataTypes.STRING(600),
		allowNull: false
	},
	web: {
		type: DataTypes.STRING(300)
	},
	distance: {
		type: DataTypes.DECIMAL(5,1).UNSIGNED,
		allowNull: false
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