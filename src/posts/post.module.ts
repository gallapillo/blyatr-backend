import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { SequelizeModule } from "@nestjs/sequelize";
import { AuthModule } from "src/auth/auth.module";
import { FilesModule } from "src/files/files.module";
import { Role } from "src/roles/roles.model";
import { RolesModule } from "src/roles/roles.module";
import { UserRoles } from "src/roles/user-roles.model";
import { User } from "src/users/user.model";
import { PostController } from "./post.controller";
import { Post } from "./post.model";
import { PostService } from "./post.service";


@Module({
    controllers: [PostController],
    providers: [PostService],
    imports: [
        SequelizeModule.forFeature([
            User, Role, UserRoles, Post
        ]),
        FilesModule,
        JwtModule,
        RolesModule,
        AuthModule
    ]
})
export class PostModule {}