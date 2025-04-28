import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.js";
import cors from "cors";
import connection from "./config/sequelize.js";

dotenv.config();

const APP_PORT = process.env.APP_PORT;
const app = express();

app.use(cors()); // Para que se puedan hacer peticiones desde otro dominio (frontend en React)
app.use(express.json());

// configurar rutas
app.use("/",router);

// Poner en marcha la API
app.listen(APP_PORT,()=>{
    console.log(`API corriendo en el puerto ${APP_PORT}`);
});
