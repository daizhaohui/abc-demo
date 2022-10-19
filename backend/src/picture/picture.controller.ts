import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import PictureService from './picture.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IRequestPageEntity, ResponseEntity, ResponseUtil } from '../common';
import { Logger, Injectable } from '@nestjs/common';
import { IPictureQueryCondition } from '.';

@Controller('picture')
@Injectable()
export default class PictureController {
  private readonly logger = new Logger('PictureController');
  constructor(private readonly pictureService: PictureService) {}

  @Get('/detail/:id')
  @ApiOperation({ summary: 'get a picture detail' })
  @ApiResponse({ status: 200, description: 'return a picture detail' })
  async getDeatil(@Param('id') id: string): Promise<ResponseEntity> {
    // 正常情况下，要检查输入值的有效性
    const detail = await this.pictureService.getDetail(parseInt(id));
    return Promise.resolve(ResponseUtil.success(detail));
  }

  @Get('list')
  @ApiOperation({ summary: 'get many pictures' })
  @ApiResponse({ status: 200, description: 'return many pictures' })
  async getList(@Query() query): Promise<ResponseEntity> {
    // 正常情况下，要检查输入值的有效性
    const queryConditon: IRequestPageEntity<IPictureQueryCondition> = {
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
    if (query.category) {
      queryConditon.params.category = query.category;
    }
    if (query.labeled) {
      queryConditon.params.labeled = query.labeled;
    }
    const list = await this.pictureService.getList(queryConditon);
    return Promise.resolve(ResponseUtil.success(list));
  }

  @Post('/save/:id')
  @ApiOperation({ summary: 'save a picture' })
  @ApiResponse({ status: 200, description: 'save a picture' })
  async save(@Param('id') id: string, @Body() body): Promise<ResponseEntity> {
    // 正常情况要对body中的参数进行有效性检查, demo就简化处理
    try {
      const result = await this.pictureService.save(parseInt(id), {
        ...body,
      });
      return Promise.resolve(ResponseUtil.success(result));
    } catch (err: any) {
      this.logger.error(err);
      return Promise.resolve(ResponseUtil.fail());
    }
  }
}
