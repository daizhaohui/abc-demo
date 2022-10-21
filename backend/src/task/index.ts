import TaskController from './task.controller';
import TaskService from './task.service';
import TaskModule from './task.module';
import { TaskEntity } from './entities/task.entity';
import { AreaStatistics } from './entities/areaStatistics.entity';
import { TotalStatistics } from './entities/totalStatistics.entity';
import { LineStatistics } from './entities/lineStatistics.entity';
import { StationStatistics } from './entities/stationStatistics.entity';
export interface ITaskQueryCondition {
  area: string;
  line?: string;
  station?: string;
}

export {
  TaskController,
  TaskService,
  TaskModule,
  TaskEntity,
  AreaStatistics,
  TotalStatistics,
  LineStatistics,
  StationStatistics,
};
