import { DataTypes, Model, Optional } from "sequelize";
import connection from '../../config/dbConnect';

interface ProductAttributes {
    id?: number,
    name?: string | null,
    price?: number | null,
    weight?: number | null,
    status?: number | null,
    description?: string | null,

    createdAt?: Date,
    updatedAt?: Date
}

export interface ProductInput extends Optional<ProductAttributes, 'id'> { }
export interface ProductOutput extends Required<ProductAttributes> { }

class Product extends Model<ProductAttributes, ProductInput> implements ProductAttributes {
    public id!: number;
    public name!: string;
    public price!: number;
    public weight!: number;
    public status!: number;
    public description!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Product.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    price: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    weight: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    status: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING
    },
}, {
    sequelize: connection,
    timestamps: true,
    underscored: false,
    freezeTableName: true
});

export default Product;