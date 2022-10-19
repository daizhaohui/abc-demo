import Dictionary from './dictionary';
import Video from './video';

// api返回的code
const ResponseCode = {
  Success: '11111'
};

export interface IResponseEntity<T> {
  status: number,
  data: {
    code: string,
    message: string,
    data: T | null | undefined
  }
}

export interface IRequestEntity<T> {
  pathParmas?: Record<string, string | number>
  params?: Record<string, string | number>
  data?: T,
  [key: string]: any
}

export function createEmptyResponseEntity<T>() {
  return {
    status: 0,
    data: null
  } as unknown as IResponseEntity<T>
}

export default {
  Video,
  Dictionary,
  ResponseCode
};
