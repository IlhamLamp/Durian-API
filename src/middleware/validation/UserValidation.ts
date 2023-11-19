import { Request, Response, NextFunction } from "express";
import Validator from "validatorjs";
import Helper from "../../helpers/Helper";
import User from "../../db/models/User";


const RegisterValidation = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { name, nik, email, password, confirmPassword } = req.body;

        const data = {
            name,
            nik,
            email,
            password,
            confirmPassword
        };

        const rules: Validator.Rules = {
            "name": "required|string|max:50",
            "nik": "required",
            "email": "required|email",
            "password": "required|min:8",
            "confirmPassword": "required|same:password"
        }

        const validate = new Validator(data, rules);

        if (validate.fails()) {
            return res.status(400).send(Helper.ResponseData(400, 'Bad Request', validate.errors, null));
        }


        // check if exist
        const isUserDataExists = async (email: string, nik: number) => {
            
            const userEmail = await User.findOne({
                where: {
                    email: data.email
                }
            });

            const userNik = await User.findOne({
                where: {
                    nik: data.nik
                }
            });

            return {
                emailExists: !!userEmail, // !! convert to boolean 
                nikExists: !!userNik  // 
            };
        }

        // 
        const { emailExists, nikExists } = await isUserDataExists(data.email, data.nik);

        if (emailExists || nikExists) {

            const errorData = {
                errors: {
                    ...(emailExists && { email: ["Email Already Used"] }),
                    ...(nikExists && { nik: ["NIK Already Used"] }),
                }
            }

            return res.status(400).send(Helper.ResponseData(500, 'Internal Server Error', errorData, null))
        }
        next();
    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, 'Internal Server Error', error, null));
    }
}

export default { RegisterValidation };