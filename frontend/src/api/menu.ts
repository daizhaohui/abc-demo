import { useHttp } from '@lincy-vue/core';
import { HttpMethod } from '@lincy-vue/core/types';
const { Http } = useHttp();

export default class MenuApi {
  @Http('/sysMenu/add', HttpMethod.Post)
  static add (options?: any): any { }

  @Http('/sysMenu/layuiSelectParentMenuTreeList')
  static menuTreeList (options: any): any { }

  @Http('/sysMenu/layuiList')
  static menuList (options: any): any { }

  @Http('/sysMenu/edit', HttpMethod.Post)
  static edit (options?: any): any { }

  @Http('/sysMenu/detail')
  static detail (options?: any): any { }

  @Http('/sysMenu/delete', HttpMethod.Post)
  static del (options?: any): any { }

  @Http('/sysMenuButton/pageList')
  static buttons (options?: any): any { }

  @Http('/sysMenuButton/detail')
  static buttonDetail (options?: any): any {}

  @Http('/sysMenuButton/add', HttpMethod.Post)
  static addButton (options?: any): any {}

  @Http('/sysMenuButton/edit', HttpMethod.Post)
  static editButton (options?: any): any {}

  @Http('/sysMenuButton/batchDelete', HttpMethod.Post)
  static delButtons (options?: any): any {}

  @Http('/sysMenuButton/addSystemDefaultButton', HttpMethod.Post)
  static addDefaultButtons (options?: any): any {}
}
