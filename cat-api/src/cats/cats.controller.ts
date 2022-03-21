import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiConsumes,
  ApiOperation,
  ApiParam,
  ApiProduces,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { idOptions } from '../openapi';
import { DataStore, DATA_STORE } from '../util';
import { Cat } from './cat';

const idPath = `:${idOptions.name}`;

@Controller('cats')
@ApiTags('cats')
@ApiConsumes('application/json')
@ApiProduces('application/json')
export class CatsController {
  constructor(@Inject(DATA_STORE) private readonly db: DataStore) {}

  @Post()
  @ApiOperation({ summary: 'Enter a cat into the database' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Cat entered into database',
  })
  createCat(@Body() catData: Cat) {
    const id = randomUUID();
    const cat = { id, ...catData };

    this.db.upsert(id, cat);
  }

  @Get()
  @ApiOperation({ summary: 'List all registered cats' })
  @ApiResponse({ status: HttpStatus.OK, description: 'List of cats' })
  listCats() {
    return this.db.getAll();
  }

  @Get(idPath)
  @ApiParam(idOptions)
  @ApiOperation({ summary: 'Retrieve data for a registered cat' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Cat info',
    type: Cat,
  })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Cat not found' })
  viewCat(@Param(idOptions.name) id: string) {
    const cat = this.db.getById(id);

    if (!cat) {
      throw new NotFoundException();
    }
  }

  @Put(idPath)
  @ApiParam(idOptions)
  @ApiOperation({ summary: 'Enter a cat into the database' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Cat data updated',
  })
  upsertCat(@Param(idOptions.name) id: string, @Body() catData: Cat) {
    const cat = { id, ...catData };
    this.db.upsert(id, cat);
  }

  @Delete(idPath)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiParam(idOptions)
  @ApiOperation({ summary: 'Remove a registered cat' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Cat removed' })
  removeCat(@Param(idOptions.name) id: string) {
    this.db.removeById(id);
  }
}
