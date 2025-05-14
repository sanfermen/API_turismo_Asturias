# 🌐 API - Mapa Interactivo de Asturias

Esta API RESTful proporciona acceso a información sobre diferentes puntos de interés en Asturias, como áreas de autocaravanas, playas, rutas, arte prerrománico y más. Está diseñada para posteriormente integrarse con una aplicación web interactiva basada en Leaflet.

Desarrollada en **Node.js** + **Express**.

Base de datos **MySQL** gestionada con **Sequelize ORM** y dockerizada.

---

## Tecnologías utilizadas

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- JWT (JSON Web Tokens) para autenticación
- Bcrypt para encriptación de contraseñas
- Docker y Docker Compose

---

## Estructura de carpetas
```
src/
|-- config/
|-- controllers/
|-- middlewares/
|-- models/
|-- routes/
|-- utils/
```
---

## Instalación y arranque

1. Clona el repositorio.
2. Asegúrate de tener **Docker** y **Docker Compose** instalados.
3. Lanza los contenedores:

```bash
docker-compose up --build
```

Las variables de entorno necesarias .env-example

---

## Endpoints principales

# Auth
POST /auth/register : Registro de nuevo usuario  
POST /auth/login : Login y obtención de token JWT  
POST /auth/logout : Logout (el cliente debe borrar el token)  
# Users
GET /user : Listar usuarios (admin only)
# Áreas, rutas, playas, museos...
GET /area  
GET /beache  
GET /council  
GET /museum  
GET /preroman  
GET /rockArt  
GET /route  

---

## Autenticación

Se usa Bearer Token en Authorization para las rutas protegidas.

---

## Registro de usuarios

Para registrar usuarios normales:
```
{
  "name": "Andrea",
  "email": "andrea@ejemplo.com",
  "password": "1234"
}
```

El rol por defecto es **user**.

El **admin** solo se puede crear manualmente en la base de datos.

## Licencia

Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más información.

