import { Module } from '@nestjs/common';
import VideoController from './video.controller';
import VideoService from './video.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoEntity } from './video.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VideoEntity])],
  controllers: [VideoController],
  providers: [VideoService],
})
export default class VideoModule {}
