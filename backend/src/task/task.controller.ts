import { Controller, Get, Query } from '@nestjs/common';
import TaskService from './task.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ResponseEntity, ResponseUtil } from '../common';
import { Injectable } from '@nestjs/common';

@Controller('task')
@Injectable()
export default class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get('/statistics/total')
  @ApiOperation({ summary: 'get total statistics' })
  @ApiResponse({ status: 200, description: 'return total statistics data' })
  async getTotalStatistics(): Promise<ResponseEntity> {
    const entities = await this.taskService.getTotalStatistics();
    return Promise.resolve(ResponseUtil.success(entities[0]));
  }

  @Get('/statistics/area')
  @ApiOperation({ summary: 'get area statistics' })
  @ApiResponse({ status: 200, description: 'return area statistics data' })
  async getAreaStatistics(): Promise<ResponseEntity> {
    const entities = await this.taskService.getAreaStatistics();
    return Promise.resolve(ResponseUtil.success(entities));
  }

  @Get('/statistics/line')
  @ApiOperation({ summary: 'get line statistics' })
  @ApiResponse({ status: 200, description: 'return line statistics data' })
  async getLineStatistics(@Query() query): Promise<ResponseEntity> {
    const entities = await this.taskService.getLineStatistics(query.area);
    return Promise.resolve(ResponseUtil.success(entities));
  }

  @Get('/statistics/station')
  @ApiOperation({ summary: 'get station statistics' })
  @ApiResponse({ status: 200, description: 'return station statistics data' })
  async getStationStatistics(@Query() query): Promise<ResponseEntity> {
    const entities = await this.taskService.getStationStatistics(
      query.area,
      query.line,
    );
    return Promise.resolve(ResponseUtil.success(entities));
  }
}
