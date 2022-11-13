import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { ValidationPipe } from "./pipes/validation-pipe";

async function start() {
    const PORT =  5000 || process.env.PORT;
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('Blyatr')
        .setDescription("A social network REST API")
        .setVersion('0.0.1')
        .addTag('DEV EDITION')
        .build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('./api/docs', app, document)

    await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}

start()