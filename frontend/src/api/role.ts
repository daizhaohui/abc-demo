import { useHttp } from '@lincy-vue/core';
import { HttpMethod } from '@lincy-vue/core/types';
const { Http } = useHttp();

export default class RoleApi {
  // 获取角色
  @Http('/sysRole/dropDown')
  static getRoles (options?: any): any { }

  @Http('/sysUser/grantRole', HttpMethod.Post)
  static grantUserRoles (options?: any): any { }

  @Http('/sysRole/add', HttpMethod.Post)
  static add (options?: any): any { }

  @Http('/sysRole/edit', HttpMethod.Post)
  static edit (options?: any): any { }

  @Http('/sysRole/delete', HttpMethod.Post)
  static del (options?: any): any { }

  @Http('/sysRole/detail')
  static detail (options?: any): any { }

  @Http('/sysMenu/menuAndButtonTree')
  static roleMenuButtons (options?: any): any { }

  @Http('/hrOrganization/roleBindOrgScope')
  static roleOrgScope (options?: any): any { }

  @Http('/sysRole/grantMenuAndButton', HttpMethod.Post)
  @Http('/sysRole/grantDataScope', HttpMethod.Post)
  static grantRoleAuth (...args: any[]): any {}
}
