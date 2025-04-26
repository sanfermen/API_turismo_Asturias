export class RouteNameNotProvided extends Error {
	constructor(){
		super("Nombre de la ruta no encontrada");
		this.statusCode = 400;
	}
}

export class RouteImageNotProvided extends Error {
	constructor(){
		super("Imagen de la ruta no introducida");
		this.statusCode = 400;
	}
}

export class RouteImageInvalid extends Error {
	constructor(){
		super("La URL de la imagen no es válida");
		this.statusCode = 400;
	}
}

export class RouteInfoNotProvided extends Error {
	constructor(){
		super("Imagen de la ruta no introducida");
		this.statusCode = 400;
	}
}

export class RouteInfoInvalidLength extends Error {
	constructor(){
		super("Tamaño de información inválido");
		this.statusCode = 400;
	}
}

export class RouteCommentsInvalidLength extends Error {
	constructor(){
		super("Tamaño del comentario inválido");
		this.statusCode = 400;
	}
}

export class RouteTrackInvalidLength extends Error {
	constructor(){
		super("Tamaño del track inválido");
		this.statusCode = 400;
	}
}

export class RouteDistanceNotProvided extends Error {
	constructor(){
		super("Distancia de la ruta no introducida");
		this.statusCode = 400;
	}
}

export class RouteCoordinatesNotProvided extends Error {
	constructor(){
		super("Coordenadas de la ruta no introducidas");
		this.statusCode = 400;
	}
}

export class RouteCoordinatesInvalid extends Error {
	constructor(){
		super("Las coordenadas no tienen el formato correcto");
		this.statusCode = 400;
	}
}

export class RouteCouncilNotProvided extends Error {
	constructor(){
		super("Concejo no introducido");
		this.statusCode = 400;
	}
}

export class RouteCouncilNotFound extends Error {
	constructor(){
		super("El concejo indicado no existe");
		this.statusCode = 400;
	}
}
