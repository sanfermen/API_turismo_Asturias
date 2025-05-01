export class FavouriteTypeInvalid extends Error {
	constructor() {
		super("El tipo de favorito no es valido");
		this.statusCode = 400;
	}
}

export class FavouritePointInvalid extends Error {
	constructor() {
		super("El id de favorito no es valido o no se ha proporcionado");
		this.statusCode = 400;
	}
}

export class FavouriteUserInvalid extends Error {
	constructor() {
		super("El id de usuario no es valido o no se ha proporcionado");
		this.statusCode = 400;
	}
}

export class FavouriteAlreadyExists extends Error {
	constructor() {
		super("El favorito ya existe");
		this.statusCode = 400;
	}
}

export class FavouriteUserNotProvided extends Error {
	constructor() {
		super("El id de usuario no es valido o no se ha proporcionado");
		this.statusCode = 400;
	}
}

export class FavouriteNotFound extends Error {
	constructor() {
		super("El favorito no existe");
		this.statusCode = 404;
	}
}