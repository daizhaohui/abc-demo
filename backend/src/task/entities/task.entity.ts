import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

// 维度统计： area、line、station的维度统计
@Entity('task')
export class TaskEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty({
    example: '01',
    description: '所属地区编码',
    type: String,
  })
  area: string;
  @Column({ type: 'varchar', name: 'line' })
  @ApiProperty({
    example: '001',
    description: '所属地铁线编码',
    type: String,
  })
  line: string;
  @Column({ type: 'varchar', name: 'station' })
  @ApiProperty({
    example: '0001',
    description: '所属地铁站编码',
    type: String,
  })
  station: string;
  @Column({ type: 'int', name: 'total' })
  @ApiProperty({
    description: '总数',
    type: String,
  })
  total: number;
  @Column({ type: 'int', name: 'total' })
  @ApiProperty({
    description: '已打标签数量',
    type: String,
  })
  labeled: number;
}
