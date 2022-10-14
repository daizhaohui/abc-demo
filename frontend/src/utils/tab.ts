import { useRoute } from '@lincy-vue/core';

// tab 风格
export default class TabUtil {
  /**
   *  创建tab路由查询参数 : 通过路由query的tab参数告诉跳转后的tab页（to）是否刷新页面，是否关闭跳转的源头(from)tab页，
   * $tab的值 JSON.string({ close, refresh} ); close 是否关闭，refresh 是否刷新
   * @param tab {close,refresh }
   * @param query query的其他参数对象
   */
  static createTabRouteQuery (tab: any, query?: any) {
    if (query) {
      return {
        ...query,
        $tab: encodeURIComponent(JSON.stringify(tab))
      };
    }
    return {
      $tab: encodeURIComponent(JSON.stringify(tab))
    };
  }

  // 从路由query中获取tab信息
  static getTabInfoFromRouteQuery () {
    const route: any = useRoute();
    if (route.query.$tab) {
      return JSON.parse(decodeURIComponent(route.query.$tab));
    }
    return {};
  }
}
