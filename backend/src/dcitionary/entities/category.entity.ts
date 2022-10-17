import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('category')
export default class CategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', name: 'name' })
  @ApiProperty({
    example: '分类1',
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
  @Column({ type: 'varchar', name: 'parent_code' })
  @ApiProperty({
    example: '02',
    description: '父类编码',
    type: String,
  })
  parentCode: string;
}
