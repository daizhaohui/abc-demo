import { useHttp } from '@lincy-vue/core';
import { HttpMethod } from '@lincy-vue/core/types';
const { Http } = useHttp();

export default class OrgApi {
  // 获取机构树
  @Http('/hrOrganization/tree')
  static getTree (options?: any): any { }

  @Http('/hrOrganization/add', HttpMethod.Post)
  static add (options?: any): any { }

  @Http('/hrOrganization/edit', HttpMethod.Post)
  static edit (options?: any): any { }

  @Http('/hrOrganization/delete', HttpMethod.Post)
  static del (options?: any): any { }

  @Http('/hrOrganization/detail')
  static detail (options?: any): any { }
}
