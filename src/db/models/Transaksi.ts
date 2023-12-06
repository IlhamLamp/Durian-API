import {DataTypes, Model, Optional } from "sequelize";
import connection from '../../config/dbConnect';
import Barang from "./Barang";
import User from "./User";

interface TransaksiAttributes {
    id?: number,
    barangId?: number | null,
    pegawaiId?: number | null,
    tanggal?: Date | null,
    jumlah?: number | null,
    status?: boolean | null,
    keterangan?: string | null,

    createdAt?: Date,
    updatedAt?: Date
}

export interface TransaksiInput extends Optional<TransaksiAttributes, 'id'> { }
export interface TransaksiOutput extends Required<TransaksiAttributes> { }

class Transaksi extends Model<TransaksiAttributes, TransaksiInput> implements TransaksiAttributes {
    public id!: number;
    public barangId!: number;
    public pegawaiId!: number;
    public tanggal?: Date;
    public jumlah?: number;
    public status?: boolean;
    public keterangan?: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Transaksi.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
    },
    barangId: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    pegawaiId: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    tanggal: {
        allowNull: true,
        type: DataTypes.DATE
    },
    jumlah: {
        allowNull: true,
        type: DataTypes.INTEGER
    },
    status: {
        allowNull: true,
        type: DataTypes.BOOLEAN
    },
    keterangan: {
        allowNull: true,
        type: DataTypes.STRING
    },
    createdAt: {        
        allowNull: false,
        type: DataTypes.DATE
    },
    updatedAt: {        
        allowNull: false,
        type: DataTypes.DATE
    }
}, {
    sequelize: connection,
    timestamps: true, 
    underscored: false,
})

Transaksi.belongsTo(Barang, { foreignKey: 'barangId' });
Transaksi.belongsTo(User, { foreignKey: 'pegawaiId'});

export default Transaksi;