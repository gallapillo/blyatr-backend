import { forwardRef, Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { AuthModule } from "src/auth/auth.module";
import { Post } from "src/posts/post.model";
import { Role } from "src/roles/roles.model";
import { RolesModule } from "src/roles/roles.module";
import { UserRoles } from "src/roles/user-roles.model";
import { UserController } from "./user.controller";
import { User } from "./user.model";
import { UserService } from "./user.service";


@Module({
    controllers: [UserController],
    providers: [UserService],
    imports: [
        SequelizeModule.forFeature([
            User, Role, UserRoles, Post
        ]),
        RolesModule,
        forwardRef(() => AuthModule)
    ],
    exports: [
        UserService
    ]
})
export class UserModule {
    
}