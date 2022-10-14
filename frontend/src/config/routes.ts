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
        name: 'org',
       // component: async () => await import(/* webpackChunkName: "org" */'@/pages/system/org'),
        path: 'org',
        meta: {
          title: '机构管理'
        }
      },
      {
        name: 'addOrg',
       // component: async () => await import(/* webpackChunkName: "org" */'@/pages/system/addEditOrg'),
        path: 'org/add',
        meta: {
          title: '新增机构',
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
