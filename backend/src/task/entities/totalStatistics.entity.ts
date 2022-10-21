import { ApiProperty } from '@nestjs/swagger';

// 总汇总
export class TotalStatistics {
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

  static sql(): string {
    return `select sum(task.total) 'total',sum(task.labeled) 'labeled'
    from task 
    `;
  }
}
