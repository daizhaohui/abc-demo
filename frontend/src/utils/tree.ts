import Tree from '@lincy-js/utils/tree';

export default class TreeUtil {
  // 根据接口返回的数据创建机构树
  static createOrgTree (data: any) {
    const orgTree = new Tree(data, {
      text: 'title',
      children: 'children',
      rootId: '-1'
    });
    return orgTree;
  }

  static createRoleOrgTree (data: any) {
    const orgTree = new Tree(data, {
      text: 'name',
      id: 'id',
      parentId: 'pId',
      rootId: '-1'
    });
    return orgTree;
  }

  // 创建子机构的数组
  static createOrgList (parentNode: any, filterFunction?: any): any {
    const list: any[] = [];
    let isOK;
    parentNode.children.forEach((item: any) => {
      isOK = false;
      if (filterFunction) {
        if (filterFunction(item)) {
          isOK = true;
        }
      } else {
        isOK = true;
      }
      if (isOK) {
        list.push({
          ...item.data,
          children: null,
          parentTitle: parentNode.text,
          disabledText: item.data.disabled ? '不可用' : '可用'
        });
      }
    });
    return list;
  }

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

  // 从机构树中获取匹配的id值
  static getMatchedTreeNodeIds (tree: any, matchFunction: any) {
    const nodes = tree.find(matchFunction);
    return nodes.map((n: any) => {
      return n.id;
    });
  }

  static getMatchedExpandedNodeIds (tree: any, matchFunction: any) {
    const nodes = tree.find(matchFunction);
    const ids: string[] = [];
    nodes.forEach((n: any) => {
      if (!ids.includes(n.id)) {
        ids.push(n.id);
      }
      n.path.forEach((p: any) => {
        if (!ids.includes(p.id)) {
          ids.push(p.id);
        }
      });
    });
    return ids;
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
