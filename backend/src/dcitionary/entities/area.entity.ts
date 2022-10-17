import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('area')
export default class AreaEntity extends BaseEntity {
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
}
