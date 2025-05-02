import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

const Favourite = connection.define("favourite", {
	favourite_id: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	user_id: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false
	},
	type: {
		type: DataTypes.ENUM('area', 'route', 'beach', 'museum', 'preroman', 'rockArt'),
		allowNull: false
	},
	point_id: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false
	},
	created: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: DataTypes.NOW
	}
});

export default Favourite;