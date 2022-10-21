export interface IQueryState {
  area: string,
  line: string,
  station: string,
  category?: string,
  labeled?: string
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
  thumbnail: string;
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
  thumbnail: string;
  key: string;
}

export interface IQueryStatistics {
  area?: string,
  line?: string,
  station?: string,
}
export interface ITaskStatistics {
  areaCode: string;
  lineCode?: string;
  stationCode?: string;
  areaName?: string;
  lineName?: string;
  stationName?: string;
  total: number;
  labeled: number;
}