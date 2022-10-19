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
  let result: Record<string, any>;
  if (!GlobalState.Dictionary.data || !GlobalState.Dictionary.data[name]) {
    result = await Api.Dictionary.getData()
    result = result.data.code === Api.ResponseCode.Success ? result.data.data : {}
    GlobalState.Dictionary.update({
      data: result
    });
  } else {
    result = GlobalState.Dictionary.data;
  }
  return Promise.resolve((result[name] || []) as IDictionaryItem[]);
}

export interface ISelectionEntity {
  label: string
  value: string
  data?: Record<string,any>
}

export interface IDictionaryItem {
  [key: string]: string | number
}

export interface IAllDictionary{
  areas: ISelectionEntity[],
  categories: ISelectionEntity[],
  lines: ISelectionEntity[],
  stations: ISelectionEntity[],
}


// 字典相关操作逻辑, 字典表统一{label(显示名字),value(唯一值）}.可以直接绑定到控件上,不需要字段映射。
export default class DictionaryUtil {
  // 角色类型
  static getDictionary (dicName: string): any[] | null {
    return Dicionarys[dicName] || null;
  }

   // 获取字典数据
  static async getAllDictionary(): Promise<IAllDictionary> {
    const areas = await getDictionaryItemByname('areas');
    const lines = await getDictionaryItemByname('lines');
    const stations = await getDictionaryItemByname('stations');
    const categories = await getDictionaryItemByname('categories');
    return Promise.resolve({
      areas: areas.map((item: IDictionaryItem) => {
        return {
         label: item.name,
         value: item.code,
        }
      }) as ISelectionEntity[],
      lines: lines.map((item: IDictionaryItem) => {
        return {
         label: item.name,
         value: item.code,
         data: {
           code: item.code,
           areaCode: item.areaCode
         },
        }
     }) as ISelectionEntity[],
      stations: stations.map((item: IDictionaryItem) => {
        return {
         label: item.name,
         value: item.code,
         data: {
           code: item.code,
           areaCode: item.areaCode,
           lineCode: item.lineCode
         },
        }
     }) as ISelectionEntity[],
     categories: categories.map((item: IDictionaryItem) => {
      return {
       label: item.name,
       value: item.code,
       data: {
         parentCode: item.parentCode,
       },
      }
      }) as ISelectionEntity[]
    } as IAllDictionary);
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

  static createLineOptions (lines: ISelectionEntity[],areaCode: string): ISelectionEntity[] {
    return [
      {
        label: '全部',
        value: '',
        data: {}
      },
      ...lines.filter((item: ISelectionEntity)=>item.data?.areaCode===areaCode)
    ] as ISelectionEntity[]
  }

  static createStationOptions (stations: ISelectionEntity[],areaCode: string, lineCode: string): ISelectionEntity[] {
    return [
      {
        label: '全部',
        value: '',
        data: {}
      },
      ...stations.filter((item: ISelectionEntity)=>item.data?.areaCode===areaCode && item.data?.lineCode===lineCode)
    ] as ISelectionEntity[]
  }

  static createCategoryOptions (categories: ISelectionEntity[]): ISelectionEntity[] {
    return [
      {
        label: '全部',
        value: '',
        data: {}
      },
      ...categories,
    ] as ISelectionEntity[];
  }

  static createLabeledOptions (): ISelectionEntity[] {
    return [
      {
        label: '全部',
        value: ''
      },
      {
        label: '未打标签',
        value: '0'
      },
      {
        label: '已打标签',
        value: '1'
      },
    ] as ISelectionEntity[]
  }
}
