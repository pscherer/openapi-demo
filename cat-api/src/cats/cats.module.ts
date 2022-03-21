import { Module } from '@nestjs/common';
import { DATA_STORE, DataStore } from '../util';
import { CatsController } from './cats.controller';

@Module({
  controllers: [CatsController],
  providers: [{ provide: DATA_STORE, useClass: DataStore }],
})
export class CatsModule {}
