export interface IResponseEntity<T> {
  status: number,
  data: {
    code: string,
    message: string,
    data: T | null | undefined
  }
}

export interface IResponsePaginationEntity<T> {
  status: number,
  data: {
    code: string,
    message: string,
    data: {
      current: number,
      pageSize: number,
      total: number,
      data: T[]
    }
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

export function createEmptyResponsePaginationEntity<T>() {
  return {
    status: 0,
    data: null
  } as unknown as IResponsePaginationEntity<T>
}