import {DataTypes, Model, Optional } from "sequelize";
import connection from '../../config/dbConnect';
import Supplier from "./Supplier";
import Kategori from "./Kategori";

interface BarangAttributes {
    id?: number,
    nama?: string | null,
    kategori_id?: number | null,
    supplier_id?: number | null,
    status?: boolean | null,
    harga?: number | null,
    stok?: number | null,
    deskripsi?: string | null,

    createdAt?: Date,
    updatedAt?: Date
}

export interface BarangInput extends Optional<BarangAttributes, 'id'> { }
export interface BarangOutput extends Required<BarangAttributes> { }

class Barang extends Model<BarangAttributes, BarangInput> implements BarangAttributes {
    public id!: number;
    public nama!: string;
    public kategori_id!: number;
    public supplier_id!: number;
    public status!: boolean;
    public harga!: number;
    public stok!: number;
    public deskripsi!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Barang.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
    },
    nama: {
        allowNull: false,
        type: DataTypes.STRING
    },
    kategori_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
    },
    supplier_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
    },
    status: {
        allowNull: true,
        type: DataTypes.BOOLEAN,
    },
    harga: {
        allowNull: true,
        type: DataTypes.DECIMAL(10, 2),
    },
    stok: {
        allowNull: true,
        type: DataTypes.INTEGER,
    },
    deskripsi: {
        allowNull: true,
        type: DataTypes.STRING,
    },
}, {
    sequelize: connection,
    timestamps: true, 
    underscored: false,
});

Barang.belongsTo(Supplier, { foreignKey: 'supplier_id' } );
Barang.belongsTo(Kategori, { foreignKey: 'kategori_id' } );

export default Barang;