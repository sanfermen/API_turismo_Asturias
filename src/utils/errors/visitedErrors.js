export class VisitedTypeInvalid extends Error {
	constructor() {
		super("El tipo de visitado no es valido");
		this.statusCode = 400;
	}
}

export class VisitedPointInvalid extends Error {
	constructor() {
		super("El id de visitado no es valido o no se ha proporcionado");
		this.statusCode = 400;
	}
}

export class VisitedUserInvalid extends Error {
	constructor() {
		super("El id de usuario no es valido o no se ha proporcionado");
		this.statusCode = 400;
	}
}

export class VisitedAlreadyExists extends Error {
	constructor() {
		super("El visitado ya existe");
		this.statusCode = 400;
	}
}

export class VisitedUserNotProvided extends Error {
	constructor() {
		super("El id de usuario no es valido o no se ha proporcionado");
		this.statusCode = 400;
	}
}

export class VisitedNotFound extends Error {
	constructor() {
		super("El sitio visitado no existe");
		this.statusCode = 404;
	}
}

export class VisitedCommentsInvalidLength extends Error {
	constructor() {
		super("El comentario debe tener entre 5 y 400 caracteres");
		this.statusCode = 400;
	}
}

export class VisitedDateNotProvided extends Error {
	constructor() {
		super("La fecha de visita es obligatoria");
		this.statusCode = 400;
	}
}

export class VisitedDateInvalid extends Error {
	constructor() {
		super("La fecha de visita no es valida");
		this.statusCode = 400;
	}
}