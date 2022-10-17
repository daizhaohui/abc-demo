import { ApiProperty } from '@nestjs/swagger';
import AreaEntity from './area.entity';
import LineyEntity from './line.entity';
import StationEntity from './station.entity';
import CategoryEntity from './category.entity';

export default class DictionaryEntity {
  @ApiProperty({
    description: '所有地区',
    type: [AreaEntity],
  })
  areas: AreaEntity[];

  @ApiProperty({
    description: '所有地铁线',
    type: [LineyEntity],
  })
  lines: LineyEntity[];

  @ApiProperty({
    description: '所有地铁站信息',
    type: [StationEntity],
  })
  statations: StationEntity[];

  @ApiProperty({
    description: '所有分类',
    type: [CategoryEntity],
  })
  categories: CategoryEntity[];
}
