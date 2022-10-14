const menus = [
  {
    id: 'dashboard',
    text: 'Dashboard',
    icon: 'icon-dashboard',
    parentId: '',
    children: [
      {
        id: 'home',
        text: '分析页',
        parentId: 'dashboard',
        route: 'home'
      }
    ]
  },
  {
    id: 'systemManage',
    text: '系统管理',
    icon: 'icon-setting',
    parentId: '',
    children: [
      {
        id: 'systemSetting',
        text: '系统设置',
        parentId: 'systemManage',
        children: [
          {
            id: 'menuManage',
            text: '菜单管理',
            route: 'menu', // 路由名字
            parentId: 'sysSettings'
          },
          {
            id: 'dicManage',
            text: '字典管理',
            parentId: 'sysSettings'
          }
        ]
      },
      {
        id: 'org',
        text: '机构管理',
        parentId: 'systemManage',
        route: 'org'// 路由名字
      }
    ]
  }
];

export default menus;
