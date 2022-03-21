import { Controller, Get } from '@nestjs/common';
import { openApiDocument } from '../create-openapi-document';

@Controller('openapi')
export class OpenApiController {
  @Get()
  getRaw() {
    return openApiDocument;
  }
}
