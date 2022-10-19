import { useHttp } from '@lincy-vue/core';
import { createEmptyResponseEntity, IResponseEntity, IRequestEntity, IResponsePaginationEntity, createEmptyResponsePaginationEntity} from './common';
import { IPicture, IQueryState } from '@/model';
import { HttpMethod } from '@lincy-vue/core/types';

const { Http } = useHttp();

export default class PictureApi {
  @Http('/picture/detail/:id')
  static async getDetail(options: IRequestEntity<null>): Promise<IResponseEntity<IPicture>> {
    return createEmptyResponseEntity<IPicture>();
  }

  @Http('/picture/list')
  static async getList(options: IRequestEntity<IQueryState>): Promise<IResponsePaginationEntity<IPicture>> {
    return createEmptyResponsePaginationEntity<IPicture>();
  }

  @Http('/picture/save/:id', HttpMethod.Post)
  static async save(options: IRequestEntity<IPicture>): Promise<IResponseEntity<string>> {
    return createEmptyResponseEntity<string>();
  }
}

