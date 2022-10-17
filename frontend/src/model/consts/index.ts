// 顶部固定菜单名
const HeaderRightContentItems = {
  // 通知、消息
  Notice: 'notice',
  // 语言
  Language: 'languge',
  // 帮助
  Help: 'help',
  // 个人
  Person: 'person',
  // 设置
  Setting: 'setting'
};

// 皮肤
const Themes = {
  Default: '',
  Dark: 'dark',
  Light: 'light'
};

// 菜单布局
const MenuLayout = {
  // 测边菜单布局
  Sider: 'siderMenu',
  // 顶部菜单布局
  Top: 'topMenu',
  // 顶部和侧边菜单相结合
  SiderTop: 'siderTopMenu'
};

// 页面组件布局
const PageLayout = {
  // 多个tab页签布局
  Tab: 'tab',
  // 单个页面布局
  Single: 'single'
};

// 设置类型
const SettingType = {
  // 整体风格
  Theme: 'theme',
  // 菜单布局
  MenuLayout: 'menuLayout',
  // tab模式
  IsTabMode: 'isTabMode',
  // 显示页脚
  ShowFooter: 'showFooter'
};

// 自定义的全局事件名
const GlobalEvents = {
  // 菜单点击事件
  OnMenuItemClick: 'menuItemClick',
  // 头靠右边项点击事件
  OnHeaderRightContentItemClick: 'headerRightContentItemClick',
  // 抽屉设置项设置改变事件
  OnDrawerItemSettingChanged: 'drawerSettingItemClick',
  // 点击logo事件
  OnLogoClick: 'logoClick',
  // 关闭了设置抽屉框
  OnCloseSettingDrawer: 'closeSettingDrawer',
  // 退出系统
  OnLogout: 'logout',
  // 视窗大小发生改变时
  OnWindowSizeChange: 'windowSizeChange',
  // 网页中所有元素加载完毕
  OnDocumentLoaded: 'documentLoaded',
  // 主布局框架组件加载完毕
  OnMainLayoutMounted: 'mainLayoutMounted',
  // 打开抽屉设置
  OnShowDrawerSetting: 'showDrawerSetting'
};

// 自定义的全局服务名字
const CustomServiceNames = {
  // 菜单服务名
  Menu: 'menu'
};


// 数据字典表
const DictionaryName = {
  // 语言
  Language: 'Language',
  Area: 'Area',
  Line: 'Line',
  Category: 'Category',
  Station: 'Station'
};

export {
  HeaderRightContentItems,
  Themes,
  MenuLayout,
  SettingType,
  GlobalEvents,
  CustomServiceNames,
  DictionaryName,
  PageLayout
};
