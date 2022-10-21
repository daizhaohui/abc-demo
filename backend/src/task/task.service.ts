import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { TotalStatistics } from './entities/totalStatistics.entity';
import { AreaStatistics } from './entities/areaStatistics.entity';
import { LineStatistics } from './entities/lineStatistics.entity';
import { StationStatistics } from './entities/stationStatistics.entity';

@Injectable()
export default class TaskService {
  constructor(
    @InjectDataSource()
    private dataSource: DataSource,
  ) {}

  async getTotalStatistics() {
    return await this.dataSource.query(TotalStatistics.sql());
  }

  async getAreaStatistics() {
    return await this.dataSource.query(AreaStatistics.sql());
  }

  async getLineStatistics(areaCode: string) {
    return await this.dataSource.query(LineStatistics.sql(areaCode));
  }

  async getStationStatistics(areaCode: string, lineCode: string) {
    return await this.dataSource.query(
      StationStatistics.sql(areaCode, lineCode),
    );
  }
}
