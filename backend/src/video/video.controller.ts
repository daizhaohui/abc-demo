import { Controller, Get, Param, Query } from '@nestjs/common';
import VideoService from './video.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IRequestPageEntity, ResponseEntity, ResponseUtil } from '../common';
import { Logger, Injectable } from '@nestjs/common';
import { IVideoQueryCondition } from '.';

@Controller('video')
@Injectable()
export default class VideoController {
  private readonly logger = new Logger('VideoController');
  constructor(private readonly videoService: VideoService) {}

  @Get('/detail/:id')
  @ApiOperation({ summary: 'get a video detail' })
  @ApiResponse({ status: 200, description: 'return a video detail' })
  async getDeatil(@Param('id') id: string): Promise<ResponseEntity> {
    // 正常情况下，要检查输入值的有效性
    const detail = await this.videoService.getDetail(parseInt(id));
    return Promise.resolve(ResponseUtil.success(detail));
  }

  @Get('list')
  @ApiOperation({ summary: 'get many videos' })
  @ApiResponse({ status: 200, description: 'return many videos' })
  async getList(@Query() query): Promise<ResponseEntity> {
    // 正常情况下，要检查输入值的有效性
    const queryConditon: IRequestPageEntity<IVideoQueryCondition> = {
      current: 1,
      pageSize: 16,
      params: {
        area: '',
        line: '',
        station: '',
      },
    };
    if (query.current) {
      queryConditon.current = parseInt(query.current);
    }
    if (query.pageSize) {
      queryConditon.pageSize = parseInt(query.pageSize);
    }
    if (query.area) {
      queryConditon.params.area = query.area;
    }
    if (query.line) {
      queryConditon.params.line = query.line;
    }
    if (query.station) {
      queryConditon.params.station = query.station;
    }
    const list = await this.videoService.getList(queryConditon);
    return Promise.resolve(ResponseUtil.success(list));
  }
}
