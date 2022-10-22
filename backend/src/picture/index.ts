import PictureController from './picture.controller';
import PictureService from './picture.service';
import PictureModule from './picture.module';
import { PictureEntity } from './picture.entity';

export interface IPictureQueryCondition {
  area: string;
  line?: string;
  station?: string;
  category?: string;
  labeled?: string;
  key?: string;
}

export { PictureController, PictureService, PictureModule, PictureEntity };
