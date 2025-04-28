import User from "../../models/user.js";
import { hash, compare } from "../../utils/bcrypt.js";
import {
	UserNameNotProvided,
	UserEmailNotProvided,
	UserPasswordNotProvided,
	UserEmailAlreadyExists,
	UserInvalidCredentials
} from "../../utils/errors/userErrors.js"

async function register(userData) {
	if (!userData.name) {
		throw new UserNameNotProvided();
	}
	if (!userData.email) {
		throw new UserEmailNotProvided();
	}
	if (!userData.password) {
		throw new UserPasswordNotProvided();
	}

	const oldUser = await User.findOne({
		where: {
			email: userData.email
		}
	})
	if (oldUser) {
		throw new UserEmailAlreadyExists();
	}

	const hashedPassword = await hash(userData.password);

	userData.password = hashedPassword;
	const result = await User.create({
		name: userData.name,
		email: userData.email,
		password: hashedPassword,
		role: "user"
	});
	return result
}

async function login(email, password) {
	if (!email) {
		throw new UserEmailNotProvided();
	}
	if (!password) {
		throw new UserPasswordNotProvided();
	}
	const user = await User.findOne({
		where: {
			email: email
		}
	})
	
	if (!user) {
		throw new UserInvalidCredentials();
	}
	const isSamePassword = await compare(password, user.password);
	if (isSamePassword) {
		return user;
	} else {
		throw new UserInvalidCredentials();
	}
}

export default {
	register,
	login
}