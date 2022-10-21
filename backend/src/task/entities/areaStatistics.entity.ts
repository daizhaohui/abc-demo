import { ApiProperty } from '@nestjs/swagger';

// 按地区汇总
export class AreaStatistics {
  @ApiProperty({
    description: '地区需要处理的总数量',
    type: Number,
  })
  total: number;

  @ApiProperty({
    description: '地区编码',
    type: String,
  })
  areaCode: string;

  @ApiProperty({
    description: '地区名称',
    type: String,
  })
  areaName: string;

  @ApiProperty({
    description: '地区中已经打标签的数量',
    type: Number,
  })
  labeled: number;

  static sql(): string {
    return `select area.code 'areaCode',area.name 'areaName',sum(task.total) 'total',sum(task.labeled) 'labeled'
    from task
    inner join area on task.area = area.code
    group by area.code,area.name
    `;
  }
}
