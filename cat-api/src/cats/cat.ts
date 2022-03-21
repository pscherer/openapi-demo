import { ApiProperty } from '@nestjs/swagger';
import { idOptions } from '../openapi';

export class Cat {
  @ApiProperty(idOptions)
  id: string;

  @ApiProperty({
    description: "The cat's name",
    required: true,
    example: 'Mittens',
  })
  name: string;

  @ApiProperty({
    description: "The cat's age in years",
    minimum: 0,
    required: true,
    example: 7,
  })
  age: number;
}
