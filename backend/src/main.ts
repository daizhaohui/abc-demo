import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'], // 'log', 'error', 'warn', 'debug', and 'verbose'
  });
  const config = new DocumentBuilder()
    .setTitle('abc-demo example')
    .setDescription('The abc-demo API description')
    .setVersion('1.0')
    .addTag('abc-demos')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  // http://localhost:8002/api
  SwaggerModule.setup('api', app, document);
  await app.listen(8002);
}
bootstrap();
