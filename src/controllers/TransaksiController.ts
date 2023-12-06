import { Request, Response } from "express";
import Helper from "../helpers/Helper";
import Barang from "../db/models/Barang";
import User from "../db/models/User";
import Transaksi from "../db/models/Transaksi";

const GetTransaksiMasuk = async(req: Request, res: Response): Promise<Response> => {
    try {
        const transaksiMasuk = await Transaksi.findAll({
            where: {
                keterangan: 'masuk'
            }
        });

        return res.status(200).send(Helper.ResponseData(200, 'OK', null, transaksiMasuk));

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, 'Internal server error', error, null));
    }
};

const BarangMasuk = async (req: Request, res: Response): Promise<Response> => {
    try {

        const { barangId, pegawaiId, tanggal, jumlah} = req.body;

        // verification
        const barang = await Barang.findOne({ where: { id: barangId } });
        const pegawai = await User.findOne({ where: { id: pegawaiId} });

        if (!barang) {
            return res.status(404).send(Helper.ResponseData(404, 'Barang Tidak Ditemukan', null, null));
        }

        if (!pegawai) {
            return res.status(404).send(Helper.ResponseData(404, 'Pegawai Tidak Ditemukan', null, null));
        }

        const transaksiMasuk = await Transaksi.create({
            barangId,
            pegawaiId,
            tanggal,
            jumlah,
            status: true,
            keterangan: 'masuk'
        })

        await barang.increment('stok', { by: jumlah });

        return res.status(201).send(Helper.ResponseData(201, 'Barang berhasil masuk', null, transaksiMasuk));

    } catch(error: any) {
        return res.status(500).send(Helper.ResponseData(500, 'Internal Server Error', error, null));
    }
}

const GetTransaksiKeluar = async(req: Request, res: Response): Promise<Response> => {
    try {
        const transaksiKeluar = await Transaksi.findAll({
            where: {
                keterangan: 'keluar'
            }
        });

        return res.status(200).send(Helper.ResponseData(200, 'OK', null, transaksiKeluar));

    } catch (error: any) {
        return res.status(500).send(Helper.ResponseData(500, 'Internal server error', error, null));
    }
};

const BarangKeluar = async (req: Request, res: Response): Promise<Response> => {
    try {

        const { barangId, pegawaiId, tanggal, jumlah } = req.body;

        // verification
        const barang = await Barang.findOne({ where: { id: barangId } });
        const pegawai = await User.findOne({ where: { id: pegawaiId} });

        if (!barang) {
            return res.status(404).send(Helper.ResponseData(404, 'Barang Tidak Ditemukan', null, null));
        }

        if (!pegawai) {
            return res.status(404).send(Helper.ResponseData(404, 'Pegawai Tidak Ditemukan', null, null));
        }

        const transaksiKeluar = await Transaksi.create({
            barangId,
            pegawaiId,
            tanggal,
            jumlah,
            status: true,
            keterangan: 'keluar'
        })

        await barang.decrement('stok', { by: jumlah });

        return res.status(201).send(Helper.ResponseData(201, 'Barang berhasil keluar', null, transaksiKeluar));

    } catch(error: any) {
        return res.status(500).send(Helper.ResponseData(500, 'Internal Server Error', error, null));
    }
}


export default { GetTransaksiMasuk, BarangMasuk, GetTransaksiKeluar, BarangKeluar };