import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PictureEntity } from './picture.entity';
import { IPictureQueryCondition } from './index';
import { IRequestPageEntity, IResponsePagingEntity } from '../common';

@Injectable()
export default class PictureService {
  constructor(
    @InjectRepository(PictureEntity)
    private pictureRepository: Repository<PictureEntity>,
  ) {}

  async getList(
    queryCondtion: IRequestPageEntity<IPictureQueryCondition>,
  ): Promise<IResponsePagingEntity<PictureEntity>> {
    const createQuery = (
      condition: IRequestPageEntity<IPictureQueryCondition>,
    ) => {
      const query = this.pictureRepository.createQueryBuilder('picture');
      query.andWhere('area = :area', { area: condition.params.area });
      if (condition.params.line) {
        query.andWhere('line = :line', { line: condition.params.line });
      }
      if (condition.params.station) {
        query.andWhere('station = :station', {
          station: condition.params.station,
        });
      }
      if (condition.params.category) {
        query.andWhere('category = :category', {
          category: condition.params.category,
        });
      }
      if (condition.params.labeled) {
        query.andWhere('labeled = :labeled', {
          labeled: condition.params.labeled,
        });
      }
      if (condition.params.key) {
        query.andWhere('key like :key', {
          key: `%${condition.params.key}%`,
        });
      }
      return query;
    };
    const countQuery = createQuery(queryCondtion);
    const total = await countQuery.getCount();
    const pageQuery = createQuery(queryCondtion);
    const skipIndex = (queryCondtion.current - 1) * queryCondtion.pageSize;
    const data = await pageQuery
      .orderBy('create_time', 'DESC')
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
    const query = this.pictureRepository.createQueryBuilder('picture');
    query.where('id = :id', { id });
    return await query.getOne();
  }

  async save(id: number, body: PictureEntity) {
    const query = this.pictureRepository.createQueryBuilder('picture');
    query.where('id = :id', { id });
    const entity = await query.getOne();
    if (body.category) {
      entity.category = body.category;
    }
    if (body.label) {
      entity.label = body.label;
    }
    if (body.key) {
      entity.key = body.key;
    }
    entity.labeled = 1;
    return await this.pictureRepository.save(entity);
  }
}
