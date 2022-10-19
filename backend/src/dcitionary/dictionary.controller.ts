import { Controller, Get } from '@nestjs/common';
import DictionaryService from './dictionary.service';
import { DictionaryEntity } from './entities';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ResponseEntity, ResponseUtil } from '../common';
import { Logger, Injectable } from '@nestjs/common';

@Controller('dictionary')
@Injectable()
export default class DictionaryController {
  private readonly logger = new Logger('DictionaryController');
  constructor(private readonly dictionaryService: DictionaryService) {}

  @Get()
  @ApiOperation({ summary: 'Get all dictionary' })
  @ApiResponse({ status: 200, description: 'Return all dictionary' })
  async getAll(): Promise<ResponseEntity> {
    // can set data into cache, get data from cache next
    return await new Promise((resolve) => {
      Promise.all([
        this.dictionaryService.getAreas(),
        this.dictionaryService.getLines(),
        this.dictionaryService.getStations(),
        this.dictionaryService.getCategories(),
      ])
        .then((result) => {
          const entity = new DictionaryEntity();
          entity.areas = result[0];
          entity.lines = result[1];
          entity.stations = result[2];
          entity.categories = result[3];
          resolve(ResponseUtil.success(entity));
        })
        .catch((err) => {
          this.logger.error(err);
          resolve(ResponseUtil.fail());
        });
    });
  }
}
