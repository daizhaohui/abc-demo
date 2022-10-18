/* eslint-disable indent */
import { defineComponent, onBeforeMount, ref, useEmitter, useRouter } from '@lincy-vue/core';
import { reset } from '@lincy-vue/core/state';
import MainLayout from '@/components/layouts/main';
import GlobalState from '@/state';
import { GlobalEvents, HeaderRightContentItems, SettingType, PageLayout, Themes } from '../../model/consts';
import MenuItems from '@/config/menu';
import { setLocale } from '@lincy-vue/core/lang';
import { hasTheme, setTheme } from '@lincy-vue/core/theme';
import { IRouterService, Emitter } from '@lincy-vue/core/types';

// {key:'home',title:'首页',href:'http://www.xxx.com/xxxx',blankTarget:true}
const footerLinks: never[] = [];

// ant-desgin-vue menu 的皮肤（dark或light）
const getMenuTheme = (theme: string) => {
  return theme === Themes.Light ? 'light' : 'dark';
};

export default defineComponent({
  components: {
    MainLayout
  },
  setup () {
    const router: IRouterService | null = useRouter();
    const emitter: Emitter = useEmitter();
    // 菜单项
    const menuItems = MenuItems;
    // 启动切换布局的spinning
    const layoutSpinning = ref(false);
    // 菜单是否收缩
    const menuCollapsed = ref(false);
    // 菜单皮肤(ant-design-vue : dark,light两种皮肤设置)
    const menuTheme = ref(getMenuTheme(GlobalState.Settings.currentTheme));
    // 菜单布局
    const menuLayout = ref(GlobalState.Settings.currentMenuLayout);
    // 是否显示页脚
    const showFooter = ref(!!GlobalState.Settings.showFooter);
    // 开启tabs模式
    const pageLayout = ref(GlobalState.Settings.isTabsMode ? PageLayout.Tab : PageLayout.Single);
    // 抽屉设置对象
    const drawerSettings = ref({
      currentTheme: GlobalState.Settings.currentTheme,
      currentMenuLayout: GlobalState.Settings.currentMenuLayout,
      status: [showFooter.value, GlobalState.Settings.isTabsMode]
    });

    onBeforeMount(() => {
      // 菜单单击：点击菜单跳转路由页面
      emitter.on(GlobalEvents.OnMenuItemClick, (e) => {
        const menuItem = e.args.data;
        if (menuItem.route) {
          router.push({
            name: menuItem.route,
            // 设置menuId，方便页面头部导航能读取菜单信息
            query: {
              menuId: menuItem.id
            }
          });
        }
      });
      // 头右边内容项目单击
      emitter.on(GlobalEvents.OnHeaderRightContentItemClick, (e) => {
        const type = e.args ? e.args.type : '';
        switch (e.target) {
          case HeaderRightContentItems.Person:
            // 个人中心
            if (type === 'userCenter') {
              console.log('userCenter');
            } else if (type === 'userSetting') {
              // 个人信息
              console.log('userSetting');
            } else if (type === 'triggerError') {
              // 触发报错
              console.log('点击触发报错');
            }
            break;
          case HeaderRightContentItems.Language:
            GlobalState.Settings.currentLanguage = e.args.data;
            setLocale(e.args.data);
            router.go(0);
            break;
            // 点击了通知
          case HeaderRightContentItems.Notice:
            // 单击了消息按钮
            if (!e.args) {
              GlobalState.Notice.spinning = true;
              setTimeout(() => {
                GlobalState.Notice.spinning = false;
              }, 1600);
            }
            break;
          case HeaderRightContentItems.Help:
            break;
          default:
            break;
        }
      });
      // 配置项改变
      emitter.on(GlobalEvents.OnDrawerItemSettingChanged, (e) => {
        const { type, data } = e.args;
        switch (type) {
          case SettingType.MenuLayout:
            menuLayout.value = data;
            GlobalState.Settings.currentMenuLayout = data;
            drawerSettings.value = {
              ...drawerSettings.value,
              currentMenuLayout: data
            };
            break;
          case SettingType.Theme:
            menuTheme.value = getMenuTheme(data);
            GlobalState.Settings.currentTheme = data;
            drawerSettings.value = {
              ...drawerSettings.value,
              currentTheme: data
            };
            if (hasTheme()) {
              setTheme(data);
            }
            break;
          case SettingType.IsTabMode:
            pageLayout.value = data ? PageLayout.Tab : PageLayout.Single;
            GlobalState.Settings.isTabsMode = data;
            drawerSettings.value = {
              ...drawerSettings.value,
              status: [drawerSettings.value.status[0], data]
            };
            break;
          case SettingType.ShowFooter:
            showFooter.value = data;
            GlobalState.Settings.showFooter = data;
            drawerSettings.value = {
              ...drawerSettings.value,
              status: [data, drawerSettings.value.status[1]]
            };
            break;
          default:
            break;
        }
      });
      // 退出 (统一处理的地方)
      emitter.on(GlobalEvents.OnLogout, () => {
        // 清理工作，然后跳转到登录页面
        // 用户信息恢复成定义的初始化值
        reset(GlobalState.UserInfo);
        router.push('login');
      });
      // 点击logo
      emitter.on(GlobalEvents.OnLogoClick, () => {
        // GlobalState.Notice.updateCount(3);
      });
    });

    return {
      menuTheme,
      menuLayout,
      menuItems,
      footerLinks,
      layoutSpinning,
      menuCollapsed,
      showFooter,
      pageLayout,
      drawerSettings
    };
  }
});
