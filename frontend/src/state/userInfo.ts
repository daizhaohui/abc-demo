import { Module, Observable, Action } from '@lincy-vue/core/state';

@Module('user')
export default class UserInfo {
  @Observable(false)
  static isSuperAdmin: boolean;

  @Observable('')
  static token: string;

  @Observable('')
  static userId: string;

  @Observable('')
  static userName: string;

  @Observable([])
  static permissions: [];

  @Action()
  static updateUser (options?: any) {}
}
