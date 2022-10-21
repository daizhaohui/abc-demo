import ResponseEntity from './response.entity';
import ResponseUtil from './responseUtil';
import { DataSource, DataSourceOptions } from 'typeorm';
import appConfig from 'src/app.config';
export interface IResponsePagingEntity<T> {
  current: number;
  total: number;
  pageSize: number;
  data: T[];
}

export interface IRequestPageEntity<T> {
  current: number;
  pageSize: number;
  params: T;
}

export { ResponseEntity, ResponseUtil };

export const createDataSource = (viewAntity: any): DataSource => {
  const options = {
    ...appConfig.db,
    entities: [viewAntity],
  };
  return new DataSource(options as DataSourceOptions);
};
