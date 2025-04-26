
class UserNameNotProvided extends Error {
    constructor(){
        super("Nombre de usuario no introducido");
        this.statusCode = 400;
    }
}

class UserEmailNotProvided extends Error {
    constructor(){
        super("Email de usuario no introducido");
        this.statusCode = 400;
    }
}
class UserPasswordNotProvided extends Error {
    constructor(){
        super("Contraseña de usuario no introducida");
        this.statusCode = 400;
    }
}

class UserEmailAlreadyExists extends Error{
    constructor(){
        super("Email de usuario ya existe");
        this.statusCode = 400;
    }
}
class UserInvalidCredentials extends Error {
    constructor(){
        super("Credenciales no válidas");
        this.statusCode = 401;
    }
}

class UserForbiddenAccess extends Error {
	constructor() {
		super("No tienes permiso para ver este perfil");
		this.statusCode = 403;
	}
}

class UserNotFound extends Error {
	constructor() {
		super("Usuario no encontrado");
		this.statusCode = 404;
	}
}

export {
	UserNameNotProvided,
	UserEmailNotProvided,
	UserPasswordNotProvided,
	UserEmailAlreadyExists,
	UserInvalidCredentials,
	UserForbiddenAccess,
	UserNotFound
}