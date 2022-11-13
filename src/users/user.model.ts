import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Post } from "src/posts/post.model";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
    username: string;
    email: string;
    password: string;
}

@Table( {tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty( {example: '1'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty( {example: 'user'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    username: string;
    
    @ApiProperty( {example: 'user@user.com'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;
    
    @ApiProperty( {example: '*****'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;
    
    @ApiProperty( {example: 'false'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    isVerified: boolean;
    
    @ApiProperty( {example: 'false'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;
    
    @ApiProperty( {example: 'ZA CHTO', description: "REASON BAN"})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

    @HasMany(() => Post)
    posts: Post[];
}