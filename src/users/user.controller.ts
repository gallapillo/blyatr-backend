import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { Roles } from "src/auth/roles-auth.decorator";
import { RoleGuard } from "src/auth/roles.guard";
import { AddRoleDto } from "./dto/add-role-dto";
import { BanUserDto } from "./dto/ban-user-dto";
import { CreateUserDto } from "./dto/create-user-dto";
import { User } from "./user.model";
import { UserService } from "./user.service";

 

@Controller('api/v1/users')
export class UserController {
    
    constructor(private userService: UserService) {}

    @ApiOperation({summary: "Созадание пользователя"})
    @ApiResponse( {status: 200, type: User})
    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto)
    }

    
    @ApiOperation({summary: "Получение всех пользователей"})
    @ApiResponse( {status: 200, type: [User]})
    @UseGuards(JwtAuthGuard)
    @Get()
    getAll() {
        return this.userService.getAllUsers()
    }

    @ApiResponse({status: 200})
    @Post('/role')
    @Roles("Admin")
    @UseGuards(RoleGuard)
    addRole(@Body() dto: AddRoleDto) {
        return this.userService.addRole(dto);
    }

    @ApiResponse({status: 200})
    @Post('/ban')
    @Roles("Admin")
    @UseGuards(RoleGuard)
    banUser(@Body() dto: BanUserDto) {
        return this.userService.ban(dto);
    }
}