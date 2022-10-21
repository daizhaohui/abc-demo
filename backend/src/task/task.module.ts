import { Module } from '@nestjs/common';
import TaskController from './task.controller';
import TaskService from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './entities/task.entity';
import { TotalStatistics } from './entities/totalStatistics.entity';
import { AreaStatistics } from './entities/areaStatistics.entity';
import { LineStatistics } from './entities/lineStatistics.entity';
import { StationStatistics } from './entities/stationStatistics.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TaskEntity,
      TotalStatistics,
      AreaStatistics,
      LineStatistics,
      StationStatistics,
    ]),
  ],
  controllers: [TaskController],
  providers: [TaskService],
})
export default class TaskModule {}
