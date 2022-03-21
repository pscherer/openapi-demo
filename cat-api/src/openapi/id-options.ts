import { ApiParamOptions, ApiPropertyOptions } from '@nestjs/swagger';

export const idOptions: ApiParamOptions & ApiPropertyOptions = {
  name: 'id',
  type: 'string',
  format: 'uuid',
  example: '137c60e5-66a7-4ec9-9055-6faca9483fe7',
  readOnly: true,
  description: 'A resource identifier',
};
