import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, ForeignKey, Model } from "sequelize-typescript";
import { Table } from "sequelize-typescript";
import { User } from "src/users/user.model";
import { Role } from "./roles.model";

@Table({tableName: 'user_roles', createdAt: false, updatedAt: false})
export class UserRoles extends Model<UserRoles> {
    @ApiProperty( {example: '1'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER})
    roleid: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;
}