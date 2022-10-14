import { DictionaryName } from '@/model/consts';

// 角色类型
const RoleType = [
  {
    value: 'role_system',
    label: '系统类型'
  }
];

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
  [DictionaryName.RoleType]: RoleType,
  [DictionaryName.Language]: Languages
};

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
}
