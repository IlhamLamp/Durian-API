import { Request, Response } from "express";
import Supplier from "../db/models/Supplier";

const GetSupplier = async(req: Request, res: Response): Promise<Response> => {
    try {
        const suppliers = await Supplier.findAll({
            where: {
                status: [true, false]
            }
        });

        return res.status(200).send({
            status: 200,
            message: 'OK',
            data: suppliers
        });

    } catch (error: any) {
        if (error != null && error instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            });
        }

        return res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
            errors: error
        });
    }
};

const GetSupplierById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {id} = req.params;
        const supplier = await Supplier.findByPk(id);

        if (!supplier) {
            return res.status(404).send({
                status: 404,
                message: 'Data Not Found',
                data: null
            });
        } 

        return res.status(200).send({
            status: 200,
            message: 'OK',
            data: supplier
        });

    } catch(error: any) {
        if (error != null && error instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            });
        }

        return res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
            errors: error
        });
    }
};

const CreateSupplier = async(req: Request, res: Response): Promise<Response> => {
    try {
        
        const { name, email, phone } = req.body;

        const create = await Supplier.create({
            name,
            email,
            phone,
            status: true
        })

        return res.status(201).send({
            status: 201,
            message: 'Successfully Added New Supplier',
            data: create
        });

    } catch (error: any) {
        if (error != null && error instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            });
        }

        return res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
            errors: error
        });
    }
};

const UpdateSupplier = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const { name, email, phone, status } = req.body;

        const supplier = await Supplier.findByPk(id);

        if(!supplier) {
            return res.status(404).send({
                status: 404,
                message: 'Supplier Not Found',
                data: null
            });
        }

        supplier.name = name;
        supplier.email = email;
        supplier.phone = phone;
        supplier.status = status;

        await supplier.save();

        return res.status(200).send({
            status: 200,
            message: 'Successfuly Update Selected Supplier',
            data: supplier
        });

    } catch (error: any) {
        if (error != null && error instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            });
        }

        return res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
            errors: error
        });
    }
}

const DeleteSupplier = async (req: Request, res: Response): Promise<Response> => {
    try {

        const { id } = req.params;
        const supplier = await Supplier.findByPk(id);

        if (!supplier) {
            return res.status(404).send({
                status: 404,
                message: 'Supplier Not Found',
                data: null
            });
        }

        await supplier.destroy();

        return res.status(200).send({
            status: 200,
            message: 'Successfuly Delete Selected Supplier',
            data: null
        });

    } catch (error: any) {
        if (error != null && error instanceof Error) {
            return res.status(500).send({
                status: 500,
                message: error.message,
                errors: error
            });
        }

        return res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
            errors: error
        });
    }
}

export default {GetSupplier, GetSupplierById, CreateSupplier, UpdateSupplier, DeleteSupplier};