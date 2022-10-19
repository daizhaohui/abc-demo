export interface IQueryState {
  area: string,
  line: string,
  station: string,
  category?: string,
}


export interface IQueryPagination<T>{
  current: number,
  pageSize: number
}

export interface IVideo {
  id: number;
  title: string;
  url: string;
  area: string;
  line: string;
  station: string;
  category: string;
  label: string;
  labeled: number;
  createTime: string;
}

export interface IPicture {
  id: number;
  title: string;
  url: string;
  area: string;
  line: string;
  station: string;
  category: string;
  label: string;
  labeled: number;
  createTime: string;
}