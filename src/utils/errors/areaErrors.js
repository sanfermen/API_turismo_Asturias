// ERRORES DE AREA

export class AreaNameNotProvided extends Error {
	constructor(){
		super("Nombre de área no introducido");
		this.statusCode = 400;
	}
}

export class AreaImageNotProvided extends Error {
	constructor(){
		super("Imagen de área no introducida");
		this.statusCode = 400;
	}
}

export class AreaImageInvalid extends Error {
	constructor(){
		super("La URL de la imagen no es válida");
		this.statusCode = 400;
	}
}

export class AreaCoordinatesNotProvided extends Error {
	constructor(){
		super("Coordenadas del área no introducidas");
		this.statusCode = 400;
	}
}

export class AreaCoordinatesInvalid extends Error {
	constructor(){
		super("Las coordenadas no tienen el formato correcto");
		this.statusCode = 400;
	}
}

export class AreaDrinkingWaterNotProvided extends Error {
	constructor(){
		super("Agua potable no introducida");
		this.statusCode = 400;
	}
}

export class AreaDrinkingWaterInvalid extends Error {
	constructor(){
		super("Formato de agua potable no válido");
		this.statusCode = 400;
	}
}

export class AreaWasteWaterNotProvided extends Error {
	constructor(){
		super("Aguas grises no introducida");
		this.statusCode = 400;
	}
}

export class AreaWasteWaterInvalid extends Error {
	constructor(){
		super("Formato de aguas grises no válido");
		this.statusCode = 400;
	}
}

export class AreaBlackWaterNotProvided extends Error {
	constructor(){
		super("Aguas negras no introducida");
		this.statusCode = 400;
	}
}

export class AreaBlackWaterInvalid extends Error {
	constructor(){
		super("Formato de aguas negras no válido");
		this.statusCode = 400;
	}
}

export class AreaTypeNotProvided extends Error {
	constructor(){
		super("Tipo de área no válido");
		this.statusCode = 400;
	}
}

export class AreaTypeInvalid extends Error {
	constructor(){
		super("Tipo de área tiene que ser pública o privada");
		this.statusCode = 400;
	}
}

export class AreaAddressNotProvided extends Error {
	constructor(){
		super("Dirección del área no introducida");
		this.statusCode = 400;
	}
}

export class AreaAddressInvalidLength extends Error {
	constructor(){
		super("Tamaño de dirección inválido");
		this.statusCode = 400;
	}
}

export class AreaCouncilNotProvided extends Error {
	constructor(){
		super("Concejo no introducido");
		this.statusCode = 400;
	}
}

export class AreaCouncilNotFound extends Error {
	constructor(){
		super("El concejo indicado no existe");
		this.statusCode = 400;
	}
}
