export class CouncilNotFound extends Error {
	constructor() {
		super("El concejo indicado no existe");
		this.statusCode = 400;
	}
}