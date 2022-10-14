// import GlobalState from '@/state';
// import { useRouter } from '@lincy-vue/core';

import { IHtppOptions } from '@lincy-vue/core/types';

export default {
  /**
     * 请求配置：可以在此方法设置请求头。如：可以此处统一加上用户令牌(token)的头信息
     * 返回修改后的options新值
     */
  requestConfig (options: IHtppOptions) {
    const token = '123456'; // GlobalState.UserInfo.token;
    // 设置请求头Token
    if (token) {
      options.headers = { Token: token };
    }
    // if(options.method == 'post' || options.method==='get') {
    //     options.params = {
    //       _t_: Date.now(),
    //       ...options.params,
    //     };
    // }
    return options;
  },

  // 请求发生错误，返回Promise
  async requestError (err: any) {
    return await Promise.reject(err);
  },

  /**
     * 成功响应拦截器，如：根据接口返回的code判断用户令牌(token)是否失效，如果失效就跳转到登录页面重新登录更新令牌
     * 返回Promise
     */
  async responseSuccess (res: any) {
    // console.log("responseSuccess:" + JSON.stringify(res));
    return await Promise.resolve(res);
  }

  // 响应失败，返回Promise
  // responseFail (err) {
  //   const router = useRouter();
  //   if (err.toString().indexOf('500')) {
  //     router.push('page500', {
  //       query: {
  //         error: err.toString()
  //       }
  //     });
  //     return;
  //   }
  //   return Promise.reject(err);
  // }
};
