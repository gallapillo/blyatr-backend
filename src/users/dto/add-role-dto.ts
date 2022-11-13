import { IsNumber, IsString } from "class-validator";

export class AddRoleDto {
    @IsString({message: "May be string"})
    readonly value: string;
    @IsNumber({}, {message: "Is Number"})
    readonly userId: number;
}