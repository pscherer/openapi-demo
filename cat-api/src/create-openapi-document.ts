import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { CatsModule } from './cats/cats.module';

export let openApiDocument: OpenAPIObject;

export const createOpenApiDocument = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setContact('Paul Scherer', '', 'p.scherer@posteo.de')
    .setDescription('Meow')
    .setTitle('Cat API')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  return (openApiDocument = SwaggerModule.createDocument(app, config, {
    include: [CatsModule],
  }));
};
