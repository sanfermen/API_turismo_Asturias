import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

const Area = connection.define("area", {
	area_id: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING(128),
		allowNull: false,
		unique: true
	},
	image: {
		type: DataTypes.STRING(128),
		allowNull: false
	},
	coordinates: {
		type: DataTypes.GEOMETRY("POINT"),
		allowNull: false,
		unique: true
	},
	drinking_water: {
		type: DataTypes.BOOLEAN,
		allowNull: false
	},
	waste_water: {
		type: DataTypes.BOOLEAN,
		allowNull: false
	},
	black_water: {
		type: DataTypes.BOOLEAN,
		allowNull: false
	},
	places: {
		type: DataTypes.INTEGER.UNSIGNED
	},
	access: {
		type: DataTypes.STRING(255)
	},
	type: {
		type: DataTypes.ENUM("public", "private"),
		allowNull: false,
		defaultValue: "public"
	},
	max_stay: {
		type: DataTypes.STRING(45)
	},
	address: {
		type: DataTypes.STRING(128),
		allowNull: false
	},
	council_id: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false
	}
})

// TODO relaciones


export default Area;