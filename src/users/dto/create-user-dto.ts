
import {IsEmail, IsString, Length} from 'class-validator'

export class CreateUserDto {
    @IsString({message: "Must be string"})
    readonly username: string;
    @IsEmail({}, {message: "Must be email"})
    readonly email: string;
    @IsString({message: "Must be string"})
    @Length(8, 25, {message: "Not less 8 and more 25"})
    readonly password: string;
}