import { defineComponent, computed, ref, watch, onMounted, provide, useEmitter, nextTick } from '@lincy-vue/core';
import { MenuLayout, PageLayout, GlobalEvents } from '@/model/consts';
import SiderMenu from '../siderMenu';
import Footer from '../footer';
import MenuNavHeader from '../header/menuNavHeader';
import RightContent from '../header/rightContent';
import RouterTab from '../../routerTab';
import DrawerSetting from '../drawerSetting';
import BaseMenu from '../../baseMenu';
import { Emitter } from '@lincy-vue/core/types';

export default defineComponent({
  components: {
    DrawerSetting,
    SiderMenu,
    MenuNavHeader,
    RightContent,
    RouterTab,
    BaseMenu,
    'main-footer': Footer
  },
  props: {
    // 侧边栏菜单宽度
    siderMenuWidth: {
      type: Number,
      default: 256
    },
    title: {
      type: String,
      default: 'Demo'
    },
    // 布局： siderMenu（侧边菜单）, topMenu(顶部菜单),siderTopMenu
    menuLayout: {
      type: String,
      default: MenuLayout.Sider
    },
    pageLayout: {
      type: String,
      default: PageLayout.Single
    },
    // 菜单项
    menuItems: {
      type: Array,
      default: null
    },
    // 是否收缩
    collapsed: {
      type: Boolean,
      default: false
    },
    // 头高度
    headerHeight: {
      type: Number,
      default: 64
    },
    // logo图片
    logo: {
      type: String,
      default: ''
    },
    menuTheme: {
      type: String,
      default: ''
    },
    drawerSettings: {
      type: Object,
      default: null
    },
    // 页脚导航项目
    // {
    //   key: 'Pro',
    //   title: '新浪',
    //   href: 'https://www.sina.com.cn/',
    //   blankTarget: true,
    // },
    footerLinks: {
      type: Array,
      default: () => {
        return [];
      }
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    // 布局Spinning
    layoutSpinning: {
      type: Boolean,
      default: false
    },
    tabItems: {
      type: Array,
      default: null
    },
    // 顶部菜单头最大宽度
    maxTopMenuHeaderWidth: {
      type: Number,
      default: 1280
    }

  },
  setup (props) {
    const menuIsCollapsed = ref(props.collapsed);
    const refFooter = ref();
    const refHeader = ref();
    const emitter: Emitter = useEmitter();
    const showDrawSettings = ref(false);
    const contentStyle = ref('');
    const siderMenuItems: any = ref(null);
    const topMenuItems: any = ref(null);

    const getContentWidth = () => {
      if (props.menuLayout === MenuLayout.Top) {
        return refTopMenuHeader.clientWidth;
      }
      return refHeader.value && refHeader.value.clientWidth;
    };

    const getContentHeight = () => {
      return refFooter.value.offsetTop - refHeader.value.clientHeight - refPageHeader.clientHeight;
    };

    let refPageHeader: any = null;
    let refTopMenuHeader: any = null;
    provide('getContentHeight', getContentHeight);
    provide('getContentWidth', getContentWidth);
    provide('setTopMenuHeaderRef', (ref: any) => {
      refTopMenuHeader = ref;
    });
    provide('setPageHeaderRef', (ref: any) => {
      refPageHeader = ref;
    });

    const reComputeStyle = () => {
      const width = getContentWidth();
      const margin = (window.innerWidth - width) / 2;
      if (props.menuLayout === MenuLayout.Top) {
        contentStyle.value = `margin-left:${margin}px;margin-right:${margin}px;padding:0 0;max-width:${width}px;min-width:360px;`;
      } else {
        contentStyle.value = 'padding:0 0;min-width:360px;';
      }
    };

    const setMenuItems = (menuItems: any[]) => {
      if (props.menuLayout === MenuLayout.Sider) {
        siderMenuItems.value = menuItems;
      } else if (props.menuLayout === MenuLayout.Top) {
        topMenuItems.value = menuItems;
      } else if (props.menuLayout === MenuLayout.SiderTop) {
        siderMenuItems.value = menuItems[0].children;
        topMenuItems.value = menuItems.map((item: any) => {
          return {
            ...item,
            hideChildren: true
          };
        });
      }
    };

    const onSiderMenuItemClick = (e) => {
      emitter.emit(GlobalEvents.OnMenuItemClick, {
        target: 'menuItem',
        args: {
          data: e
        }
      });
    };

    const onTopMenuItemClick = (e) => {
      if (props.menuLayout === MenuLayout.Top) {
        emitter.emit(GlobalEvents.OnMenuItemClick, {
          target: 'menuItem',
          args: {
            data: e
          }
        });
      } else if (props.menuLayout === MenuLayout.SiderTop) {
        if (e.children && e.children.length) {
          siderMenuItems.value = e.children;
        } else {
          emitter.emit(GlobalEvents.OnMenuItemClick, {
            target: 'menuItem',
            args: {
              data: e
            }
          });
        }
      }
    };

    // 展开菜单
    const onUnfold = () => {
      menuIsCollapsed.value = false;
    };

    // 折叠菜单
    const onFold = () => {
      menuIsCollapsed.value = true;
    };

    // 窗体宽度变小到一定程度后,收缩其菜单
    const onResizeCollapsed = () => {
      if (window.innerWidth <= 600) {
        menuIsCollapsed.value = true;
      } else {
        menuIsCollapsed.value = false;
      }
    };

    const collapseMenu = (val: boolean) => {
      menuIsCollapsed.value = val;
    };

    const onCloseSettingDrawer = () => {
      showDrawSettings.value = false;
    };

    watch(() => props.collapsed, val => {
      menuIsCollapsed.value = val;
    });

    watch(() => props.menuLayout, () => {
      setMenuItems(props.menuItems);
      nextTick(() => {
        reComputeStyle();
      });
    });

    watch(() => props.maxTopMenuHeaderWidth, () => {
      nextTick(() => {
        reComputeStyle();
      });
    });

    watch(() => props.menuItems, (val) => {
      setMenuItems(val);
    });

    const menuMode = computed(() => {
      if (props.menuLayout === MenuLayout.Top) return 'horizontal';
      return 'inline';
    });

    setMenuItems(props.menuItems);

    onMounted(() => {
      emitter.on(GlobalEvents.OnShowDrawerSetting, () => {
        showDrawSettings.value = true;
      });
      window.onresize = () => {
        // 通过捕获系统的onresize事件触发我们需要执行的事件
        onResizeCollapsed();
        reComputeStyle();
        emitter.emit(GlobalEvents.OnWindowSizeChange);
      };
      window.onload = () => {
        emitter.emit(GlobalEvents.OnDocumentLoaded);
      };

      onResizeCollapsed();
      reComputeStyle();
      emitter.emit(GlobalEvents.OnMainLayoutMounted);
    });

    return {
      menuIsCollapsed,
      refFooter,
      refHeader,
      menuMode,
      showDrawSettings,
      contentStyle,
      refTopMenuHeader,
      siderMenuItems,
      topMenuItems,
      onCloseSettingDrawer,
      onUnfold,
      onFold,
      collapseMenu,
      onSiderMenuItemClick,
      onTopMenuItemClick
    };
  }
});
