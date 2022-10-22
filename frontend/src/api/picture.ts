import { useHttp } from '@lincy-vue/core';
import { createEmptyResponseEntity, IResponseEntity, IRequestEntity, IResponsePaginationEntity, createEmptyResponsePaginationEntity} from './common';
import { IPicture, IQueryState, IUploadPicture } from '@/model';
import { HttpMethod } from '@lincy-vue/core/types';

const { Http, getHttpService } = useHttp();

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

  static async upload(picture:IUploadPicture){
    const formData = new FormData();
    const httpService = getHttpService();
    formData.append('title', picture.title);
    formData.append('area', picture.area);
    formData.append('line', picture.line);
    formData.append('station', picture.station);
    formData.append('file', picture.file);
    return await httpService.post('/picture/upload', {
      headers: {
        'Content-type': 'multipart/form-data'
      },
      data: formData,
    })
  }
}

