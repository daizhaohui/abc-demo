import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('video')
export class VideoEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', name: 'title' })
  @ApiProperty({
    description: '视频标题',
    type: String,
  })
  title: string;
  @Column({ type: 'varchar', name: 'url' })
  @ApiProperty({
    example:
      'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8',
    description: '视频地址',
    type: String,
  })
  url: string;
  @Column({ type: 'varchar', name: 'thumbnail' })
  @ApiProperty({
    example:
      'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8',
    description: '视频第一帧图',
    type: String,
  })
  thumbnail: string;
  @Column({ type: 'varchar', name: 'area' })
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
  @Column({ type: 'varchar', name: 'category' })
  @ApiProperty({
    example: '0001',
    description: '所属分类',
    type: String,
  })
  category: string;
  @Column({ type: 'varchar', name: 'label' })
  @ApiProperty({
    example: '(20,30)|(30,50)',
    description: '标签信息，多个以分隔号隔开',
    type: String,
  })
  label: string;
  @Column({ type: 'int', name: 'labeled' })
  @ApiProperty({
    example: '0:未打, 1:已打',
    description: '是否已打标签',
    type: String,
  })
  labeled: number;
  @ApiProperty({
    example: '2022-10-18 23:00:11',
    description: '创建时间',
    type: String,
  })
  @Column({ type: 'datetime', name: 'create_time' })
  createTime: string;
}
