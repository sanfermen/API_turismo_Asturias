export class BeachNotFound extends Error {
	constructor() {
		super("No existe ninguna playa con ese id");
		this.statusCode = 400;
	}
}

export class BeachCouncilNotFound extends Error {
	constructor(){
		super("El concejo indicado no existe");
		this.statusCode = 400;
	}
}

export class BeachNotFoundInCouncil extends Error {
	constructor(){
		super("No existen playas en el concejo indicado");
		this.statusCode = 400;
	}
}