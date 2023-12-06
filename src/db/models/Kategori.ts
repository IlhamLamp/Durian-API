import {DataTypes, Model, Optional } from "sequelize";
import connection from '../../config/dbConnect';

interface KategoriAttributes {
    id?: number,
    nama?: string | null,
    keterangan?: string | null,

    createdAt?: Date,
    updatedAt?: Date
}

export interface KategoriInput extends Optional<KategoriAttributes, 'id'> { }
export interface KategoriOutput extends Required<KategoriAttributes> { }

class Kategori extends Model<KategoriAttributes, KategoriInput> implements KategoriAttributes {
    public id!: number;
    public nama!: string;
    public keterangan!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Kategori.init({
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
    keterangan: {
        allowNull: true,
        type: DataTypes.STRING
    }
}, {
    sequelize: connection,
    timestamps: true, 
    underscored: false,
})

export default Kategori;