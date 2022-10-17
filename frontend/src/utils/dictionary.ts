import { DictionaryName } from '@/model/consts';
import Api from '@/api';
import GlobalState from  '@/state';

// 语言
const Languages = {
  zh_CN: [{
    label: '中文',
    value: 'zh_CN'
  }, {
    label: '英文',
    value: 'en_US'
  }],
  en_US: [{
    label: 'Chinese',
    value: 'zh_CN'
  }, {
    label: 'English',
    value: 'en_US'
  }]
};

const Dicionarys: any = {
  [DictionaryName.Language]: Languages
};

const getDictionaryItemByname =  async (name: string): Promise<IDictionaryItem[]> => {
  let data: Record<string, any>;
  if (!GlobalState.Dictionary.data || !GlobalState.Dictionary.data.name) {
    data = await Api.Dictionary.getData()
    data = data.code === Api.ResponseCode.Success ? data.data : {}
  } else {
    data = GlobalState.Dictionary.data;
  }
  return Promise.resolve((data[name] || []) as IDictionaryItem[]);
}

export interface ISelectionEntity {
  label: string
  value: string
  data?: Record<string,any>
}

export interface IDictionaryItem {
  [key: string]: string | number
}


// 字典相关操作逻辑, 字典表统一{label(显示名字),value(唯一值）}.可以直接绑定到控件上,不需要字段映射。
export default class DictionaryUtil {
  // 角色类型
  static getDictionary (dicName: string): any[] | null {
    return Dicionarys[dicName] || null;
  }

  // 根据code获取获取字典表项
  static getDictionaryItem (dicName: string, value: any) {
    const dic = DictionaryUtil.getDictionary(dicName);
    if (dic) {
      let i;
      const len = dic.length;
      for (i = 0; i < len; i++) {
        if (dic[i].value === value) {
          return dic[i];
        }
      }
    }
    return null;
  }
  static async getAreas(): Promise<ISelectionEntity[]> {
    const areas = await getDictionaryItemByname('areas');
    return Promise.resolve(areas.map((item: IDictionaryItem) => {
       return {
        label: item.name,
        value: item.code,
       }
    }) as ISelectionEntity[]);
  }

  static async getLines(): Promise<ISelectionEntity[]> {
    const areas = await getDictionaryItemByname('lines');
    return Promise.resolve(areas.map((item: IDictionaryItem) => {
       return {
        label: item.name,
        value: item.code,
        data: {
          code: item.code,
          areaCode: item.areaCode
        },
       }
    }) as ISelectionEntity[]);
  }

  static async getStations(): Promise<ISelectionEntity[]> {
    const areas = await getDictionaryItemByname('stations');
    return Promise.resolve(areas.map((item: IDictionaryItem) => {
       return {
        label: item.name,
        value: item.code,
        data: {
          code: item.code,
          areaCode: item.areaCode,
          lineCode: item.lineCode
        },
       }
    }) as ISelectionEntity[]);
  }

  static async getCategories(): Promise<ISelectionEntity[]> {
    const areas = await getDictionaryItemByname('categories');
    return Promise.resolve(areas.map((item: IDictionaryItem) => {
       return {
        label: item.name,
        value: item.code,
        data: {
          parentCode: item.parentCode,
        },
       }
    }) as ISelectionEntity[]);
  }
}
