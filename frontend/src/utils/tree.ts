import Tree from '@lincy-js/utils/tree';

export default class TreeUtil {
  // children.length=0时设置children=null
  static setChildrenEqualNull (nodes: any[]) {
    nodes.forEach(item => {
      if (item.children && item.children.length <= 0) {
        item.children = null;
      } else {
        TreeUtil.setChildrenEqualNull(item.children);
      }
    });
  }

  static createMenuTreeList (data: any) {
    const menuTree: any = new Tree(data, {
      id: 'menuId',
      text: 'menuName',
      parentId: 'menuParentId',
      rootId: '-1'
    });
    TreeUtil.setChildrenEqualNull(menuTree.rootNode.children);
    return menuTree.rootNode.children;
  }

  static createMenuTree (data: any) {
    data.push({
      id: '-1',
      name: '根菜单',
      pId: ''
    });
    const menuTree = new Tree(data, {
      id: 'id',
      text: 'name',
      parentId: 'pId',
      rootId: '-1'
    });
    return menuTree;
  }

  static createRoleMenuTree (data: any) {
    const menuTree = new Tree(data, {
      id: 'id',
      text: 'name',
      parentId: 'pid',
      rootId: '-1'
    });
    return menuTree;
  }

  static getNodes (tree: any, orgIds: string[]) {
    const nodes: any[] = [];
    let node;
    if (tree) {
      orgIds.forEach(k => {
        node = tree.getNode(k);
        if (node) nodes.push(node);
      });
    }
    return nodes;
  }
}
