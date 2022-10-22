import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('picture')
export class PictureEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', name: 'title' })
  @ApiProperty({
    description: '图片标题',
    type: String,
  })
  title: string;
  @Column({ type: 'varchar', name: 'url' })
  @ApiProperty({
    example:
      'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8',
    description: '图片地址',
    type: String,
  })
  url: string;
  @Column({ type: 'varchar', name: 'thumbnail' })
  @ApiProperty({
    example:
      'https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/hls/xgplayer-demo.m3u8',
    description: '图片第一帧图',
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
    example: '{width: 800, height: 600, rects:[{left:10,top:20,width:100,height:100},{left:20,top:20,width:10,height:30}]',
    description: '图片比较框信息，以json字符串存储',
    type: String,
  })
  label: string;
  @Column({ type: 'varchar', name: 'key' })
  @ApiProperty({
    description: '关键字',
    type: String,
  })
  key: string;
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
