import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VideoEntity } from './video.entity';
import { IVideoQueryCondition } from './index';
import { IRequestPageEntity, IResponsePagingEntity } from '../common';

@Injectable()
export default class DictionaryService {
  constructor(
    @InjectRepository(VideoEntity)
    private videoRepository: Repository<VideoEntity>,
  ) {}

  async getList(
    queryCondtion: IRequestPageEntity<IVideoQueryCondition>,
  ): Promise<IResponsePagingEntity<VideoEntity>> {
    const createQuery = (
      condition: IRequestPageEntity<IVideoQueryCondition>,
    ) => {
      const query = this.videoRepository.createQueryBuilder('video');
      query.andWhere('area = :area', { area: condition.params.area });
      if (condition.params.line) {
        query.andWhere('line = :line', { line: condition.params.area });
      }
      if (condition.params.line) {
        query.andWhere('station = :station', {
          station: condition.params.station,
        });
      }
      return query;
    };
    const countQuery = createQuery(queryCondtion);
    const total = await countQuery.getCount();
    const pageQuery = createQuery(queryCondtion);
    const skipIndex = (queryCondtion.current - 1) * queryCondtion.pageSize;
    const data = await pageQuery
      .orderBy('createdTime', 'DESC')
      .offset(skipIndex)
      .limit(queryCondtion.pageSize)
      .getMany();
    return Promise.resolve({
      current: queryCondtion.current,
      total,
      pageSize: queryCondtion.pageSize,
      data,
    });
  }

  async getDetail(id: number) {
    const query = this.videoRepository.createQueryBuilder('video');
    query.where('id = :id', { id });
    return await query.getOne();
  }
}
