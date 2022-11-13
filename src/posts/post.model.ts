import { ApiProperty } from "@nestjs/swagger";
import { Model, BelongsTo, Column, DataType, Table, ForeignKey } from "sequelize-typescript";
import { User } from "src/users/user.model";

interface PostCreationAttrs {
    readonly content: string;
    readonly userId: Number;
    readonly image: string
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {
    @ApiProperty( {example: '1'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @Column({type: DataType.STRING, allowNull: true})
    image: string;

    @BelongsTo(() => User)
    author: User
}