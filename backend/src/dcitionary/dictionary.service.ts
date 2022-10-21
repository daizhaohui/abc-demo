import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  AreaEntity,
  CategoryEntity,
  LineEntity,
  StationEntity,
} from './entities';

@Injectable()
export default class DictionaryService {
  constructor(
    @InjectRepository(AreaEntity)
    private areaRepository: Repository<AreaEntity>,
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
    @InjectRepository(LineEntity)
    private lineRepository: Repository<LineEntity>,
    @InjectRepository(StationEntity)
    private stationRepository: Repository<StationEntity>,
  ) {}

  async getAreas() {
    return this.areaRepository.find();
  }

  async getCategories() {
    return this.categoryRepository.find();
  }

  async getLines() {
    return this.lineRepository.find();
  }

  async getStations() {
    return this.stationRepository.find();
  }
}
