import { DataTypes, Model, Optional } from "sequelize";
import connection from '../../config/dbConnect';

interface SupplierAttributes {
    id?: number,
    name?: string | null,
	email?: string | null,
    phone?: string | null,
	status?: boolean | null,

    createdAt?: Date,
    updatedAt?: Date
}

export interface SupplierInput extends Optional<SupplierAttributes, 'id'> { }
export interface SupplierOutput extends Required<SupplierAttributes> { }

class Supplier extends Model<SupplierAttributes, SupplierInput> implements SupplierAttributes {
    public id!: number;
    public name!: string;
	public email!: string;
    public phone!: string;
	public status!: boolean;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Supplier.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: true
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
});

export default Supplier;