import { useHttp } from '@lincy-vue/core';
import { createEmptyResponseEntity, IResponseEntity, IRequestEntity, IResponsePaginationEntity, createEmptyResponsePaginationEntity} from './common';
import { ITaskStatistics, IQueryStatistics } from '@/model';

const { Http } = useHttp();

export default class TaskApi {
  @Http('/task/statistics/total')
  static async getTotalStatistics(): Promise<IResponseEntity<ITaskStatistics>> {
    return createEmptyResponseEntity<ITaskStatistics>();
  }

  @Http('/task/statistics/area')
  static async getAreaStatistics(): Promise<IResponsePaginationEntity<ITaskStatistics>> {
    return createEmptyResponsePaginationEntity<ITaskStatistics>();
  }

  @Http('/task/statistics/line')
  static async getLineStatistics(options: IRequestEntity<IQueryStatistics>): Promise<IResponsePaginationEntity<ITaskStatistics>> {
    return createEmptyResponsePaginationEntity<ITaskStatistics>();
  }

  @Http('/task/statistics/station')
  static async getStationStatistics(options: IRequestEntity<IQueryStatistics>): Promise<IResponsePaginationEntity<ITaskStatistics>> {
    return createEmptyResponsePaginationEntity<ITaskStatistics>();
  }
}
