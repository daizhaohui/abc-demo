import Home from '@/pages/home';
import Login from '@/pages//login';
import Main from '@/pages/main';
import Page403 from '@/pages/error/page403';
import Page404 from '@/pages/error/page404';
import Page500 from '@/pages/error/page500';

const routes = [
  {
    name: 'root',
    redirect: '/login',
    path: '/'
  },
  {
    name: 'main',
    component: Main, // 主框架页面,在主框架中显示的页面路由，添加到其children中
    path: '/main',
    children: [
      {
        name: 'home', // 主页（名字设置为home）
        component: Home,
        path: 'home',
        meta: {
          title: '首页',
          closable: false
        }
      },
      // 跟router-view对应起来，只有两层
      {
        name: 'video',
        component: async () => await import(/* webpackChunkName: "sysem-manage" */'@/pages/video'),
        path: 'video',
        meta: {
          title: '视频管理'
        }
      },
      {
        name: 'picture',
       // component: async () => await import(/* webpackChunkName: "sysem-manage" */'@/pages/system/addEditOrg'),
        path: 'picture',
        meta: {
          title: '图片管理',
          icon: '' // 导航或页签页面图标
        }
      },
      {
        name: 'task',
       // component: async () => await import(/* webpackChunkName: "sysem-manage" */'@/pages/system/addEditOrg'),
        path: 'task',
        meta: {
          title: '任务管理',
          icon: '' // 导航或页签页面图标
        }
      }
    ]
  },
  {
    name: 'login',
    component: Login,
    path: '/login'
  },
  {
    name: 'page403',
    component: Page403,
    path: '/403'
  },
  {
    name: 'page500',
    component: Page500,
    path: '/500'
  },
  // 发在最后一个,没有匹配到以上的路由页面
  {
    name: 'page404',
    component: Page404,
    path: '/:pathMatch(.*)'
  }
];

export default routes;
