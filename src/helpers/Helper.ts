import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserInput from "../db/models/User";

dotenv.config();

// extends model from UserInput Model
interface UserData extends UserInput {

}

// interface UserData {
// 	name: string | null,
// 	email: string | null,
// 	address: string | null,
// 	born: string | null,
// 	roleId: number | null,
// 	nik: string | null,
// 	gender: string | null,
// 	phone: string | null,
// 	verified: boolean | null,
// 	active: boolean | null
// }

const ResponseData = (status: number, message: string | null, error: any | null, data: any | null) => {
	if (error != null && error instanceof Error) {
		const response = {
			status: status,
			message: error.message,
			errors: error,
			data: null
		}

		return response;
	}

	const res = {
		status,
		message,
		errors: error,
		data: data
	};

	return res;
}

const GenerateToken = (data: any): string => {
	const token = jwt.sign(data, process.env.JWT_TOKEN as string, { expiresIn: "10m"});
	return token;
}

const GenerateRefreshToken = (data: any): string => {
	const refreshToken = jwt.sign(data, process.env.JWT_REFRESH_TOKEN as string, { expiresIn: "1d"})
	return refreshToken;
}

const ExtractToken = (token: string): UserData | null => {
	
	const secretKey: string = process.env.JWT_TOKEN as string;

	let resData: any;

	const res = jwt.verify(token, secretKey, (err, decoded) => {
		if (err) {
			resData = null
		} else {
			resData = decoded
		}
	});

	if (resData) {
		const result: UserData = <UserData>(resData);
		return result;
	}
	
	return null;
}

const ExtractRefreshToken = (token: string): UserData | null => {
	
	const secretKey: string = process.env.JWT_REFRESH_TOKEN as string;
	
	let resData: any;

	const res = jwt.verify(token, secretKey, (err, decoded) => {
		if (err) {
			resData = null
		} else {
			resData = decoded
		}
	});

	if (resData) {
		// If resData is not null, it means the JWT was successfully verified and the decoded token payload contains user data. The code then converts the resData object to type UserData and returns it.
		const result: UserData = <UserData>(resData); 
		return result
	}

	return null;
}


export default { ResponseData, GenerateToken, GenerateRefreshToken, ExtractToken, ExtractRefreshToken };