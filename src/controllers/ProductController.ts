import { Request, Response } from "express";
import Product from "../db/models/Product";
import Helper from "../helpers/Helper";

const GetProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll({
            where: {
                status: [1, 2]
            }
        });

        return res.status(200).send(Helper.ResponseData(200, 'OK', null, products));
    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, 'Internal Server Error', error, null));
    };
};

const CreateProduct = async (req: Request, res: Response) => {
    try {
        const {name, price, weight, status, description} = req.body;

        const createProduct = await Product.create({
            name,
            price,
            weight,
            status,
            description
        });

        return res.status(201).send(Helper.ResponseData(201, 'Product Created Susccesfully', null, createProduct));

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, 'Internal Server Error', error, null));
    };
};

export default { GetProducts, CreateProduct };