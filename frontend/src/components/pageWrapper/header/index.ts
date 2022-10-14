import { defineComponent, useRoute, onBeforeMount, useService, reactive, useRouter } from '@lincy-vue/core';
import { CustomServiceNames } from '@/model/consts';
import GlobalState from '@/state';

export default defineComponent({
  components: {
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    },
    showBack: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    pageHeaderBack: null
  },
  setup (props, context) {
    const { emit } = context;

    const data: any = reactive({
      breadcrumbs: []
    });

    const toPage = (item: any) => {
      const router = useRouter();
      if (item.route) {
        router.push(item.route);
      }
    };

    const onBack = () => {
      emit('pageHeaderBack');
    };

    onBeforeMount(() => {
      // 从路由参数中获取菜单id
      const route = useRoute();
      const menuSerice = useService(CustomServiceNames.Menu);
      const breadcrumbs = [
        {
          id: 'home',
          text: '首页',
          route: 'home'
        }
      ];
      // 从全局状态中获取当前打开的菜单功能id，如果为空，从路由的配置中去找配置的功能菜单id
      if (GlobalState.Menu.menuId) {
        data.breadcrumbs = breadcrumbs.concat(menuSerice.getBreadcrumbs(GlobalState.Menu.menuId));
      } else {
        if (route.meta.auth) {
          data.breadcrumbs = breadcrumbs.concat(menuSerice.getBreadcrumbs(route.meta.auth));
        }
      }
    });

    return {
      data,
      toPage,
      onBack
    };
  }
});
