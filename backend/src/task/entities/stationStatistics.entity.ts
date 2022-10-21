import { ApiProperty } from '@nestjs/swagger';

// 按地铁站统计
export class StationStatistics {
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
    description: '地铁站编码',
    type: String,
  })
  stationCode: string;

  @ApiProperty({
    description: '地铁线名称',
    type: String,
  })
  stationName: string;

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

  static sql(areaCode: string, lineCode: string): string {
    return `select area.code 'areaCode',line.code 'lineCode',station.code 'stationCode',station.name 'stationName',sum(task.total) 'total',sum(task.labeled) 'labeled'
    from task
    inner join area on task.area = area.code
    inner join line on line.code = task.line
    inner join station on station.code = task.station
    where area.code='${areaCode}' and line.code ='${lineCode}'
    group by area.code,line.code,station.code,station.name
    `;
  }
}
