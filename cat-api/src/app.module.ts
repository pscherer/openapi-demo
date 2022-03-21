import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { OpenApiController } from './openapi/api.controller';

@Module({
  imports: [CatsModule],
  controllers: [OpenApiController],
})
export class AppModule {}
