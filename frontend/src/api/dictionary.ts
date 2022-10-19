import { useHttp } from '@lincy-vue/core';
import { createEmptyResponseEntity, IResponseEntity } from './';

const { Http } = useHttp();

export default class DictionaryApi {
  @Http('/dictionary')
  static async getData<T>(): Promise<IResponseEntity<T>> {
    return createEmptyResponseEntity<T>();
  }
}
