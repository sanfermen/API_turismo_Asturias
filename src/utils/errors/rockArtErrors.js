
class RockArtNameNotProvided extends Error {
	constructor(){
		super("Nombre del arte rupestre no introducido");
		this.statusCode = 400;
	}
}

class RockArtImageNotProvided extends Error {
	constructor(){
		super("Imagen del arte rupestre no introducida");
		this.statusCode = 400;
	}
}

class RockArtImageInvalid extends Error {
	constructor(){
		super("La URL de la imagen no es válida");
		this.statusCode = 400;
	}
}

class RockArtPeriodNotProvided extends Error {
	constructor(){
		super("Periodo del arte rupestre no introducido");
		this.statusCode = 400;
	}
}

class RockArtInfoNotProvided extends Error {
	constructor(){
		super("Información no introducida");
		this.statusCode = 400;
	}
}

class RockArtInfoInvalidLength extends Error {
	constructor(){
		super("Tamaño de información inválido");
		this.statusCode = 400;
	}
}

class RockArtWebInvalid extends Error {
	constructor(){
		super("La URL de la web no es válida");
		this.statusCode = 400;
	}
}


class RockArtCoordinatesNotProvided extends Error {
	constructor(){
		super("Coordenadas del arte rupestre no introducidas");
		this.statusCode = 400;
	}
}

class RockArtCoordinatesInvalid extends Error {
	constructor(){
		super("Las coordenadas no tienen el formato correcto");
		this.statusCode = 400;
	}
}

class RockArtCouncilNotProvided extends Error {
	constructor(){
		super("Concejo no introducido");
		this.statusCode = 400;
	}
}

class RockArtCouncilNotFound extends Error {
	constructor(){
		super("El concejo indicado no existe");
		this.statusCode = 400;
	}
}

export default{
	RockArtNameNotProvided,
	RockArtImageNotProvided,
	RockArtImageInvalid,
	RockArtPeriodNotProvided,
	RockArtWebInvalid,
	RockArtInfoNotProvided,
	RockArtInfoInvalidLength,
	RockArtCoordinatesNotProvided,
	RockArtCoordinatesInvalid,
	RockArtCouncilNotFound,
	RockArtCouncilNotProvided
}