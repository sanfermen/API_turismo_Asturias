
class MuseumNameNotProvided extends Error {
	constructor(){
		super("Nombre del museo no introducido");
		this.statusCode = 400;
	}
}

class MuseumImageNotProvided extends Error {
	constructor(){
		super("Imagen del museo no introducida");
		this.statusCode = 400;
	}
}

class MuseumImageInvalid extends Error {
	constructor(){
		super("La URL de la imagen no es válida");
		this.statusCode = 400;
	}
}

class MuseumWebInvalid extends Error {
	constructor(){
		super("La URL de la web no es válida");
		this.statusCode = 400;
	}
}

class MuseumInfoNotProvided extends Error {
	constructor(){
		super("Imagen del museo no introducida");
		this.statusCode = 400;
	}
}

class MuseumInfoInvalidLength extends Error {
	constructor(){
		super("Tamaño de información inválido");
		this.statusCode = 400;
	}
}

class MuseumCoordinatesNotProvided extends Error {
	constructor(){
		super("Coordenadas del museo no introducidas");
		this.statusCode = 400;
	}
}

class MuseumCoordinatesInvalid extends Error {
	constructor(){
		super("Las coordenadas no tienen el formato correcto");
		this.statusCode = 400;
	}
}

class MuseumPriceNotProvided extends Error {
	constructor(){
		super("Museo gratis sí o no no introducido");
		this.statusCode = 400;
	}
}

class MuseumPriceInvalid extends Error {
	constructor(){
		super("Museo gratis sí o no");
		this.statusCode = 400;
	}
}

class MuseumAddressNotProvided extends Error {
	constructor(){
		super("Dirección del museo no introducida");
		this.statusCode = 400;
	}
}

class MuseumAddressInvalidLength extends Error {
	constructor(){
		super("Tamaño de dirección inválido");
		this.statusCode = 400;
	}
}

class MuseumCouncilNotProvided extends Error {
	constructor(){
		super("Concejo no introducido");
		this.statusCode = 400;
	}
}

class MuseumCouncilNotFound extends Error {
	constructor(){
		super("El concejo indicado no existe");
		this.statusCode = 400;
	}
}

export {
	MuseumNameNotProvided,
	MuseumImageNotProvided,
	MuseumImageInvalid,
	MuseumWebInvalid,
	MuseumInfoNotProvided,
	MuseumInfoInvalidLength,
	MuseumCoordinatesNotProvided,
	MuseumCoordinatesInvalid,
	MuseumPriceNotProvided,
	MuseumPriceInvalid,
	MuseumAddressNotProvided,
	MuseumAddressInvalidLength,
	MuseumCouncilNotFound,
	MuseumCouncilNotProvided
}