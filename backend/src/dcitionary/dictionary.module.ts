import { Module } from '@nestjs/common';
import DictionaryController from './dictionary.controller';
import DictionaryService from './dictionary.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AreaEntity,
  CategoryEntity,
  LineEntity,
  StationEntity,
} from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AreaEntity,
      CategoryEntity,
      LineEntity,
      StationEntity,
    ]),
  ],
  controllers: [DictionaryController],
  providers: [DictionaryService],
})
export default class DictionaryModule {}
