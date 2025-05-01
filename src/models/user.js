import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";
import Favourite from "./favourite.js";
import Visited from "./visited.js";

const User = connection.define("user", {
	user_id: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING(128),
		allowNull: false
	},
	email: {
		type: DataTypes.STRING(128),
		allowNull: false,
		unique: true
	},
	password: {
		type: DataTypes.STRING(80),
		allowNull: false
	},
	role: {
		type: DataTypes.ENUM("admin", "user"),
		allowNull: false,
		defaultValue: "user"
	}
})

User.hasMany(Favourite, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Favourite.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(Visited, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Visited.belongsTo(User, { foreignKey: 'user_id' });

export default User;