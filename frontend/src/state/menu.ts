import { Module, Action, Observable } from '@lincy-vue/core/state';

// 设置初始化状态值
// 当前菜单功能状态
@Module('menu')
export default class MenuState {
  // 当前打开的菜单功能id
  @Observable('')
  static menuId: string;

  // 展开的菜单
  @Observable([])
  static openKeys: string[];

  // 当前选中的菜单
  @Observable([])
  static selectedKeys: string[];

  // 可以传递要修改的@Observable属性对象修改对应值
  @Action()
  static update () {}
}
