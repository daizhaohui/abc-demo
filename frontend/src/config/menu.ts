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
        id: 'pictureManage',
        text: '图片管理',
        parentId: 'systemManage',
        route: 'picture'// 路由名字
      },
      {
        id: 'videoManage',
        text: '视频管理',
        parentId: 'systemManage',
        route: 'video'// 路由名字
      },
      {
        id: 'taskManage',
        text: '任务管理',
        parentId: 'systemManage',
        route: 'task'// 路由名字
      }
    ]
  }
];

export default menus;
