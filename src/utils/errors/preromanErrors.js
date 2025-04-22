
class PreromanNameNotProvided extends Error {
	constructor(){
		super("Nombre del arte prerrománico  no introducido");
		this.statusCode = 400;
	}
}

class PreromanImageNotProvided extends Error {
	constructor(){
		super("Imagen del arte prerrománico no introducida");
		this.statusCode = 400;
	}
}

class PreromanImageInvalid extends Error {
	constructor(){
		super("La URL de la imagen no es válida");
		this.statusCode = 400;
	}
}

class PreromanUnescoNotProvided extends Error {
	constructor(){
		super("Patrimonio de la Unesco no introducido");
		this.statusCode = 400;
	}
}

class PreromanUnescoInvalid extends Error {
	constructor(){
		super("Formato de Patrimonio de la Unesco no válido");
		this.statusCode = 400;
	}
}

class PreromanWebInvalid extends Error {
	constructor(){
		super("La URL de la web no es válida");
		this.statusCode = 400;
	}
}

class PreromanInfoInvalidLength extends Error {
	constructor(){
		super("Tamaño de información inválido");
		this.statusCode = 400;
	}
}

class PreromanCoordinatesNotProvided extends Error {
	constructor(){
		super("Coordenadas del arte prerrománico no introducidas");
		this.statusCode = 400;
	}
}

class PreromanCoordinatesInvalid extends Error {
	constructor(){
		super("Las coordenadas no tienen el formato correcto");
		this.statusCode = 400;
	}
}

class PreromanAddressInvalidLength extends Error {
	constructor(){
		super("Tamaño de dirección inválido");
		this.statusCode = 400;
	}
}

class PreromanCouncilNotProvided extends Error {
	constructor(){
		super("Concejo no introducido");
		this.statusCode = 400;
	}
}

class PreromanCouncilNotFound extends Error {
	constructor(){
		super("El concejo indicado no existe");
		this.statusCode = 400;
	}
}

export {
	PreromanNameNotProvided,
	PreromanImageNotProvided,
	PreromanImageInvalid,
	PreromanWebInvalid,
	PreromanInfoInvalidLength,
	PreromanUnescoNotProvided,
	PreromanUnescoInvalid,
	PreromanCoordinatesNotProvided,
	PreromanCoordinatesInvalid,
	PreromanAddressInvalidLength,
	PreromanCouncilNotFound,
	PreromanCouncilNotProvided
}