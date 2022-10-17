import { useHttp } from '@lincy-vue/core';

const { Http } = useHttp();

export default class DictionaryApi {
  @Http('/dictionary')
  static async getData (): Promise<Record<string,any>> {
    return {}
  }

}
