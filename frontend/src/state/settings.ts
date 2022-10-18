import { Module, Observable, Action, Persist } from '@lincy-vue/core/state';
import { Themes, MenuLayout } from '@/model/consts';
@Persist()
@Module('settings')
export default class SettingState {
  // 当前皮肤设置（整体风格)
  @Observable(Themes.Default)
  static currentTheme: string;

  // 当前导航菜单模式
  @Observable(MenuLayout.Sider)
  static currentMenuLayout: string;

  // 是否多tab页签
  @Observable(1)
  static isTabsMode: boolean;

  // 是否显示页脚
  @Observable(1)
  static showFooter: boolean;

  // 当前语言
  @Observable('zh_CN')
  static currentLanguage: string;

  // 定义更新状态值方法
  @Action()
  static update () {}
}
