import VideoController from './video.controller';
import VideoService from './video.service';
import VideoModule from './video.module';
import { VideoEntity } from './video.entity';

export interface IVideoQueryCondition {
  area: string;
  line?: string;
  station?: string;
}

export { VideoController, VideoService, VideoModule, VideoEntity };
