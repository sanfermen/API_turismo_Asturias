import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

const Museum = connection.define("museum", {
	museum_id: {
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
	web: {
		type: DataTypes.STRING(128)
	},
	information: {
		type: DataTypes.STRING(300),
		allowNull: false
	},
	coordinates: {
		type: DataTypes.GEOMETRY("POINT"),
		allowNull: false
	},
	free: {
		type: DataTypes.BOOLEAN,
		allowNull: false
	},
	council_id: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false
	}
});

export default Museum;