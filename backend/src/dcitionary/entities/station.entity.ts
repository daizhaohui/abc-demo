import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('station')
export default class StationEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', name: 'name' })
  @ApiProperty({
    example: '上海',
    description: '名称',
    type: String,
  })
  name: string;
  @Column({ type: 'varchar', name: 'code' })
  @ApiProperty({
    example: '01',
    description: '编码',
    type: String,
  })
  code: string;
  @Column({ type: 'varchar', name: 'line_code' })
  @ApiProperty({
    example: '03',
    description: '所属于地铁线编码',
    type: String,
  })
  lineCode: string;
  @Column({ type: 'varchar', name: 'area_code' })
  @ApiProperty({
    example: '02',
    description: '所属于地区编码',
    type: String,
  })
  areaCode: string;
}
