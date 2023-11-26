import { DataTypes, Model, Optional } from "sequelize";
import connection from '../../config/dbConnect';
import Role from "./Role";

interface UserAttributes {
    id?: number,
    name?: string | null,
	email?: string | null,
    address?: string | null,
    born?: Date,
	roleId?: number | null,
    nik?: string | null,
    gender?: string | null,
    phone?: string | null,
	password?: string | null,
	accessToken?: string | null,
	verified?: boolean | null,
	active?: boolean | null,

    createdAt?: Date,
    updatedAt?: Date
}

export interface UserInput extends Optional<UserAttributes, 'id'> { }
export interface UserOutput extends Required<UserAttributes> { }

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    public id!: number;
    public name!: string;
	public email!: string;
    public address!: string;
    public born!: Date;
	public roleId!: number;
    public nik!: string;
    public gender!: string;
    public phone!: string;
	public password!: string;
	public accessToken!: string;
	public verified!: boolean;
	public active!: boolean;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init({
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
    address: {
        type: DataTypes.STRING,
        allowNull: true
    },
    born: {
        type: DataTypes.DATE,
        allowNull: true
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    nik: {
        type: DataTypes.STRING,
        allowNull: true
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true
    },
    accessToken: {
        type: DataTypes.STRING,
        allowNull: true
    },
    verified: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    active: {
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

User.belongsTo(Role, { foreignKey: 'roleId'} );

export default User;