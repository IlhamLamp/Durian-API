import { Request, Response } from "express";
import User from '../db/models/User';
import PasswordHelper from "../helpers/PasswordHelper";
import Helper from "../helpers/Helper";
import Role from "../db/models/Role";

const Register = async (req: Request, res: Response): Promise<Response> => {
    try {

        const { name, email, address, born, nik, gender, phone, password, roleId } = req.body;
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
            roleId: roleId,
            active: true,
            verified: true
        });

        return res.status(201).send(Helper.ResponseData(201, 'Succesfully Created User', null, user))

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, 'Internal Server Error', error, null));
    }
}

const UserLogin = async (req: Request, res: Response): Promise<Response> => {
    try {

        const { email, password } = req.body;
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        if (!user) {
            return res.status(401).send(Helper.ResponseData(401, 'Unauthorized', null, null));
        }

        const matched = await PasswordHelper.PasswordCompare(password, user.password);
        if (!matched) {
            return res.status(401).send(Helper.ResponseData(401, 'Unauthorized', null, null));
        }

        const dataUser = {
            name: user.name,
            email: user.email,
            address: user.address,
            born: user.born,
            roleId: user.roleId,
            nik: user.nik,
            gender: user.gender,
            phone: user.phone,
            verified: user.verified,
            active: user.active
        }

        const token = Helper.GenerateToken(dataUser);
        const refreshToken = Helper.GenerateRefreshToken(dataUser);

        user.accessToken = refreshToken;
        await user.save();
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });

        const responseUser = {
            ...dataUser,
            token: token
        }

        // test
        console.log(responseUser);

        return res.status(200).send(Helper.ResponseData(200, 'OK', null, responseUser));

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, 'Internal Server Error', error, null));
    }
}

const UserDetail = async (req: Request, res: Response): Promise<Response> => {

    try {

        const email = res.locals.userEmail;
        const user = await User.findOne({
            where: {
                email: email
            },
            include: {
                model: Role,
                attributes: ["id", "rolename"]
            }
        });

        if (!user) {
            return res.status(404).send(Helper.ResponseData(404, 'User not found', null, null));
        }

        user.password = '';
        user.accessToken = '';
        return res.status(200).send(Helper.ResponseData(200, 'OK', null, user));

    } catch (error) {
        return res.status(500).send(Helper.ResponseData(500, 'Internal Server Error', null, null));
    }
}

const UserLogout = async (req: Request, res: Response): Promise<Response> => {

    try {
        const refreshToken = req.cookies?.refreshToken;
        if (!refreshToken) {
            return res.status(200).send(Helper.ResponseData(200, 'User Logout', null, null));
        }

        const email = res.locals.userEmail;
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        if (!user) {
            res.clearCookie('refreshToken');
            return res.status(200).send(Helper.ResponseData(200, 'User Logout', null, null));
        }

        await user.update({
            accessToken: null
        }, {
            where: {
                email: email
            }
        });

        res.clearCookie('refreshToken');
        return res.status(200).send(Helper.ResponseData(200, '', null, null));
    } catch (error) {
        return res.status(500).send(Helper.ResponseData(500, 'Internal Server Error', null, null));
    }
}

const RefreshToken = async (req: Request, res: Response): Promise<Response> => {

    try {

        const refreshToken = req.cookies?.refreshToken;

        // refreshToken = undefined

        if (refreshToken === undefined) {
            return res.status(400).send(Helper.ResponseData(400, 'Undefined ya bg', Error, undefined))
        }

        if (!refreshToken) {
            return res.status(401).send(Helper.ResponseData(401, 'refresh token gagal', null, null));
        }

        const decodedUser = Helper.ExtractRefreshToken(refreshToken);
        console.log(decodedUser);

        if (!decodedUser) {
            return res.status(401).send(Helper.ResponseData(401, 'decoded user gagal', null, null));
        }

        const decodedUserData = {
            name: decodedUser.name,
            email: decodedUser.email,
            address: decodedUser.address,
            born: decodedUser.born,
            roleId: decodedUser.roleId,
            nik: decodedUser.nik,
            gender: decodedUser.gender,
            phone: decodedUser.phone,
            verified: decodedUser.verified,
            active: decodedUser.active
        };

        const token = Helper.GenerateToken(decodedUserData);

        const resultUser = {    
            ...decodedUserData,
            token: token
        }

        return res.status(200).send(Helper.ResponseData(201, 'OK', null, resultUser));

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, 'Internal Server Error', error, null))
    }
}

const GetAllUsers = async (req: Request, res: Response): Promise<Response> => {
    try {

        const users = await User.findAll({
            where: {
                active: [true, false]
            }
        });

        return res.status(200).send(Helper.ResponseData(200, 'OK', null, users));

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, 'Internal Server Error', error, null));
    }
}


export default { Register, UserLogin, UserDetail, UserLogout, RefreshToken, GetAllUsers }; 