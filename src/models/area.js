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
		type: DataTypes.STRING(300)
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

export default Area;