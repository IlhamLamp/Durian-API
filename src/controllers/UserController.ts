import { Request, Response } from "express";
import User from '../db/models/User';
import PasswordHelper from "../helpers/PasswordHelper";
import Helper from "../helpers/Helper";

const Register = async (req: Request, res: Response): Promise<Response> => {
    try {

        const { name, email, address, born, nik, gender, phone, password, confirmPassword } = req.body;
        const hashed = await PasswordHelper.PasswordHashing(password);

        const user = await User.create({
            name,
            email,
            address,
            born,
            nik,
            gender,
            phone,
            password: hashed,
            active: true,
            verified: true,
            roleId: 1
        });

        return res.status(201).send(Helper.ResponseData(201, 'Succesfully Created User', null, user))

    } catch (error: any) {
        return res.status(201).send(Helper.ResponseData(500, 'Internal Server Error', error, null))
    }
}

export default { Register }; 