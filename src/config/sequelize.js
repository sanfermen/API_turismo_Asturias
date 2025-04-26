import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
const DB_HOST = process.env.DB_HOST;
const DB_PORT = 3306;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_DIALECT = "mysql";

const connection = new Sequelize(
	DB_NAME,
	DB_USER,
	DB_PASSWORD,
	{
		host: DB_HOST,
		dialect: DB_DIALECT,
		port: DB_PORT,
		define: {
			timestamps: false,
			freezeTableName: true
		},
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
		},
		retry: {
			max: 5  // intenta 5 veces antes de fallar
		}
	}
)

async function testConnection() {
	let retries = 5;
	while (retries) {
		try {
			await connection.authenticate();
			console.log("Conexión con MySQL hecha.");
			break;
		} catch (error) {
			console.log("Imposible conectarse a la base de datos", error);
			retries -= 1;
			await new Promise((resolve) => setTimeout(resolve, 5000)); // Espera 5 segundos
		}
	}
	if (!retries) {
		console.error("Imposible conectarse a la base de datos");
		process.exit(1);
	}
}

testConnection();

export default connection;