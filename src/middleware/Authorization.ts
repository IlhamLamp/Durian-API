import { Request, Response, NextFunction } from "express";
import Helper from "../helpers/Helper"; 

const Authenticated = (req: Request, res: Response, next: NextFunction) => {
    try {

        const authToken = req.headers["authorization"];
        const token = authToken && authToken.split(" ")[1];

        if (token === null) {
            return res.status(401).send(Helper.ResponseData(401, 'Unauthorized', null, null));
        }

        const result = Helper.ExtractToken(token!);
        if (!result) {
            return res.status(401).send(Helper.ResponseData(401, 'Unauthorized', null, null));
        }
        next();

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, 'Internal Server Error', error, null));
    }
}

export default { Authenticated };