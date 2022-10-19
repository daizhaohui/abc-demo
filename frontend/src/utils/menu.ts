import MenuTree from '@lincy-js/utils/tree';

export default class MenuService {
  tree: any;

  constructor (menuItems: []) {
    // menuItems是树形结构，设置children的属性的名字
    this.tree = new MenuTree(menuItems, {
      children: 'children'
    });
  }

  // 根据菜单id，获取面包屑路径
  getBreadcrumbs (menuId: string) {
    const treeNode = this.tree.getNode(menuId);
    return treeNode.path;
  }
}
