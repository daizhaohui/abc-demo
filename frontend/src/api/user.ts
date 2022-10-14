import { useHttp } from '@lincy-vue/core';
import { HttpMethod } from '@lincy-vue/core/types';
const { Http } = useHttp();
export default class UserApi {
  // @Http('/login', HttpMethod.Post)
  static async login (options?: any) {
    // eslint-disable-next-line promise/param-names
    return await new Promise((resovle) => {
      setTimeout(() => {
        resovle({
          data: {
            token: 'admin11111',
            userId: 'admin',
            userName: '管理员',
            permissions: [1, 2, 3]
          },
          code: '00000'
        });
      }, 600);
    });
  }

  @Http('/logout')
  static logout (options?: any): any { }

  @Http('/sysUser/page')
  static getOrgUsers (options?: any): any { }

  @Http('/sysUser/add', HttpMethod.Post)
  static add (options?: any): any { }

  @Http('/sysUser/edit', HttpMethod.Post)
  static edit (options?: any): any { }

  @Http('/sysUser/changeStatus', HttpMethod.Post)
  static changeStatus (options?: any): any { }

  @Http('/sysUser/detail')
  static detail (options?: any): any { }

  @Http('/sysUser/delete', HttpMethod.Post)
  static del (options?: any): any { }
}
