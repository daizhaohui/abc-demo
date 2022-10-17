import { ApiProperty } from '@nestjs/swagger';

export default class ResponseEntity {
  constructor(data: any, code = '11111', message = '') {
    this.code = code;
    this.message = message;
    this.data = data;
  }

  @ApiProperty({
    example: '500',
    description: '响应body的响应码',
    type: String,
  })
  code: string;
  @ApiProperty({
    example: '服务器出错了',
    description: '返回的code的描述',
    type: String,
  })
  message: string;
  @ApiProperty({
    description: '响应的数据体，任何数据类型',
  })
  data: string;
}
