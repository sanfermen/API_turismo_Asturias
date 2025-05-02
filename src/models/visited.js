import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

const Visited = connection.define("visited", {
	visited_id: {
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
	comments: {
		type: DataTypes.STRING(400),
	},
	visit_date: {
		type: DataTypes.DATE,
		allowNull: false
	},
	created: {
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: DataTypes.NOW
	}
});

export default Visited;