import ResponseEntity from './response.entity';

/**
 * 00000 失败  11111成功, 00000-11111可以表示业务错误代码
 */
export default class {
  static success(data: any, code = '11111', message = 'Success') {
    return new ResponseEntity(data, code, message);
  }
  static fail(data = null, message = 'Fail', code = '00000') {
    return new ResponseEntity(data, code, message);
  }
}
