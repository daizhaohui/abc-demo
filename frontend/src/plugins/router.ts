// import { useAuth } from '@lincy-vue/core/auth';
import GlobalState from '@/state';
import { IRouteLocationNormalized } from '@lincy-vue/core/types';

export default {
  beforeEach (to: IRouteLocationNormalized) {
    // 设置当前打开的菜单功能id
    if (to.query && to.query.menuId) {
      GlobalState.Menu.menuId = to.query.menuId;
    }
    // 页面访问授权判断,如有配置中设置meta.auth表示要判断访问权限
    if (to.meta && to.meta.auth) {
      // 需要授权，判断用户token是否存在，不存在跳转登录
      if (!GlobalState.UserInfo.token) {
        return {
          name: 'login'
        };
      }
    }
    return true;
  }

};
