import express from "express";
import dotenv from "dotenv";
import session from "express-session";

dotenv.config();

const APP_PORT = process.env.APP_PORT;
const SESSION_SECRET = process.env.SESSION_SECRET;
const app = express();

// Cualquier archivo dentro de la carpeta public se puede acceder desde el navegador
/* app.use(express.static("public"));

app.use(session({
	secret: SESSION_SECRET,
	resave: true,
	saveUninitialized: true
})); */ //TODO preguntar a Danel, creo que no necesito nada de esto

app.use(express.json());

// configurar rutas
app.use("/",router);

// Poner en marcha la API
app.listen(APP_PORT,()=>{
    console.log(`Backend conectado al puerto ${APP_PORT}`);
})