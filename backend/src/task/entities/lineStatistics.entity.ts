import { ApiProperty } from '@nestjs/swagger';

// 按地铁线统计
export class LineStatistics {
  @ApiProperty({
    description: '地区编码',
    type: String,
  })
  areaCode: string;

  @ApiProperty({
    description: '地铁线编码',
    type: String,
  })
  lineCode: string;

  @ApiProperty({
    description: '地铁线名称',
    type: String,
  })
  lineName: string;

  @ApiProperty({
    description: '地区需要处理的总数量',
    type: Number,
  })
  total: number;
  @ApiProperty({
    description: '地区中已经打标签的数量',
    type: Number,
  })
  labeled: number;

  static sql(areaCode: string) {
    return `select area.code 'areaCode',line.code 'lineCode',line.name 'lineName',sum(task.total) 'total',sum(task.labeled) 'labeled'
    from task
    inner join area on task.area = area.code
    inner join line on line.code = task.line
    where area.code='${areaCode}'
    group by area.code,line.code,line.name
    `;
  }
}
