// import { useAuth } from '@lincy-vue/core/auth';

import MenuService from '@/utils/menu';
import MenuItems from '@/config/menu';
import { CustomServiceNames } from '@/model/consts';
import GlobalState from '@/state';
import { setLocale } from '@lincy-vue/core/lang';
import { hasTheme, setTheme, getDefaultTheme } from '@lincy-vue/core/theme';
import { IAppContext } from '@lincy-vue/core/types';
// // import LoginInfo from '../state/loginInfo';
export default {
  mounted (context: IAppContext) {
    const { app } = context;
    // const auth = useAuth();
    // const arr = [];
    // // if (LoginInfo.userName == "admin") {
    // arr.push(auth.create("upload"));
    // auth.add(arr);
    const mItems: any = MenuItems;
    const menuService = new MenuService(mItems);
    app.registerGlobalService(CustomServiceNames.Menu, menuService);
    // // }
    setLocale(GlobalState.Settings.currentLanguage);
    // 设置皮肤
    const savedTheme = GlobalState.Settings.currentTheme;
    const defaultTheme = getDefaultTheme();
    const theme = savedTheme || defaultTheme;
    // 保存的样式不是设置的默认样式，重新加载样式
    if (hasTheme() && theme && savedTheme !== defaultTheme) {
      setTheme(theme);
    }

    // 从后台加载语言包，并设置
    // useI18n({
    //     messages:{
    //       'zh_CN':{}
    //     }
    // });
  }
};
