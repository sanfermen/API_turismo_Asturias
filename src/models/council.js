import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";
import Area from "./area.js";
import Route from "./route.js";
import Preroman_art from "./preroman_art.js";
import Beach from "./beach.js";
import Rock_art from "./rock_art.js";
import Museum from "./museum.js";

const Council = connection.define("council", {
	council_id: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: DataTypes.STRING(128),
		allowNull: false
	},
	zone: {
		type: DataTypes.STRING(128),
		allowNull: false
	}
})

// TODO relaciones (comprobar)
Council.hasMany(Area, {foreignKey:"council_id"});
Area.belongsTo(Council, {foreignKey:"council_id"});

Council.hasMany(Route, {foreignKey:"council_id"});
Route.belongsTo(Council, {foreignKey:"council_id"});

Council.hasMany(Preroman_art, {foreignKey:"council_id"});
Preroman_art.belongsTo(Council, {foreignKey:"council_id"});

Council.hasMany(Beach, {foreignKey:"council_id"});
Beach.belongsTo(Council, {foreignKey:"council_id"});

Council.hasMany(Rock_art, {foreignKey:"council_id"});
Rock_art.belongsTo(Council, {foreignKey:"council_id"});

Council.hasMany(Museum, {foreignKey:"council_id"});
Museum.belongsTo(Council, {foreignKey:"council_id"});

export default Council;