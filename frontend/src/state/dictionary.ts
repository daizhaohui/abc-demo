import { Module, Observable, Action } from '@lincy-vue/core/state';


@Module('dictionary')
export default class DictionaryState {
  @Observable('')
  static data: Record<string, any[]>

  @Action()
  static update () {}
}