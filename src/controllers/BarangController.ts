import { Request, Response } from "express";
import Barang from "../db/models/Barang";
import Helper from "../helpers/Helper";

const GetBarangs = async(req: Request, res: Response): Promise<Response> => {
    try {
        const barangs = await Barang.findAll({
            where: {
                status: [true, false]
            }
        });

        return res.status(200).send(Helper.ResponseData(200, 'OK', null, barangs));

    } catch (error: any) {

        return res.status(500).send(Helper.ResponseData(500, 'Internal server error', error, null));
    }
};

const GetBarangsById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const barangs = await Barang.findByPk(id);

        if (!barangs) {
            return res.status(404).send(Helper.ResponseData(404, 'Data Not Found', null, null));
        } 

        return res.status(200).send(Helper.ResponseData(200, 'OK', null, barangs));

    } catch(error: any) {

        return res.status(500).send(Helper.ResponseData(500, 'Internal server error', error, null));
    }
};

const CreateBarangs = async(req: Request, res: Response): Promise<Response> => {
    try {
        
        const { nama, kategori_id, supplier_id, harga, stok, deskripsi } = req.body;

        const create = await Barang.create({
            nama,
            kategori_id: kategori_id,
            supplier_id: supplier_id,
            status: true,
            harga,
            stok,
            deskripsi
        });

        return res.status(201).send(Helper.ResponseData(201, 'Successfully Added New Barangs', null, create));

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, 'Internal server error', error, null));
    }
};

const UpdateBarangs = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const { nama, kategori_id, supplier_id, harga, stok, deskripsi } = req.body;

        const barang = await Barang.findByPk(id);

        if(!barang) {
            return res.status(404).send(Helper.ResponseData(404, 'Barangs Not Found', null, null));
        }

        barang.nama = nama;
        barang.kategori_id = kategori_id;
        barang.supplier_id = supplier_id;
        barang.harga = harga;
        barang.stok = stok;
        barang.deskripsi = deskripsi;

        await barang.save();

        return res.status(200).send(Helper.ResponseData(200, 'Successfuly Update Selected Barang', null, barang));

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, 'Internal server error', error, null));
    }
}

const DeleteBarangs = async (req: Request, res: Response): Promise<Response> => {
    try {

        const { id } = req.params;
        const barang = await Barang.findByPk(id);

        if (!barang) {
            return res.status(404).send(Helper.ResponseData(404, 'Data Not Found', null, null));
        }

        await barang.destroy();

        return res.status(200).send(Helper.ResponseData(200, 'Successfuly Delete Selected Barang', null, null));

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, 'Internal server error', error, null));
    }
}

const SearchBarang = async (req: Request, res: Response): Promise<Response> => {
    try {

        const nama: string = req.query.nama as string;
        const barang = await Barang.findOne({ where: {nama: nama}});
        
        if (!barang) {
            return res.status(404).send(Helper.ResponseData(404, 'Data Not Found', null, null));
        } 

        return res.status(200).send(Helper.ResponseData(200, 'OK', null, barang));
    } catch (error:any) {
        return res.status(500).send(Helper.ResponseData(500, 'Internal server error', error, null));
    }
}

export default { GetBarangs, GetBarangsById, CreateBarangs, UpdateBarangs, DeleteBarangs, SearchBarang };