import { useHttp } from '@lincy-vue/core';
import { createEmptyResponseEntity, IResponseEntity, IRequestEntity } from './';
import { IVideo, IQueryState } from '@/model';

const { Http } = useHttp();

export default class VideoApi {
  @Http('/video/:id')
  static async getDetail(options: IRequestEntity<{id: string}>): Promise<IResponseEntity<IVideo>> {
    return createEmptyResponseEntity<IVideo>();
  }

  @Http('/video/list')
  static async getList(options: IRequestEntity<IQueryState>): Promise<IResponseEntity<IVideo[]>> {
    return createEmptyResponseEntity<IVideo[]>();
  }
}

