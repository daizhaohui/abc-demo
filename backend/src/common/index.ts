import ResponseEntity from './response.entity';
import ResponseUtil from './responseUtil';

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
