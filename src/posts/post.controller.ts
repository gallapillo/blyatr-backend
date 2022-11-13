import { Body, Controller, Get, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { CreatePostDto } from "./dto/create-post.dto";
import { PostService } from "./post.service";

@Controller('api/v1/posts')
export class PostController {
    constructor (private postService: PostService) {}

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: CreatePostDto,
    @UploadedFile() image) {
        return this.postService.create(dto, image)
    }

    @Get('/all')
    @UseGuards(JwtAuthGuard)
    getAllPosts() {
        return this.postService.getAllPosts()
    }
}