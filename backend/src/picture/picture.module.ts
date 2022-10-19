import { Module } from '@nestjs/common';
import PictrueController from './picture.controller';
import PictureService from './picture.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PictureEntity } from './picture.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PictureEntity])],
  controllers: [PictrueController],
  providers: [PictureService],
})
export default class PictureModule {}
