import { defineComponent, useEmitter, computed } from '@lincy-vue/core';
import BaseMenu from '@/components/baseMenu';
import { GlobalEvents, Themes } from '@/model/consts';
import { Emitter } from '@lincy-vue/core/types';

export default defineComponent({
  components: {
    BaseMenu
  },
  props: {
    // 侧边栏菜单宽度
    siderMenuWidth: {
      type: Number,
      default: 256
    },
    collapsed: {
      default: false,
      type: Boolean
    },
    fixSiderbar: {
      default: true,
      type: Boolean
    },
    menuItems: {
      type: Array,
      default: () => {
        return [];
      }
    },
    logo: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'Demo'
    },
    theme: {
      type: String,
      default: ''
    },
    openKeys: {
      type: Array,
      default: () => {
        return [];
      }
    },
    selectedKeys: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  emits: {
    menuItemClick: null
  },
  setup (props, context) {
    const { emit } = context;
    const handleClickLogo = () => {
      const emitter: Emitter = useEmitter();
      emitter.emit(GlobalEvents.OnLogoClick, {
        target: 'logo',
        args: {}
      });
    };

    const onMenuItemClick = (e: any) => {
      emit('menuItemClick', e);
    };

    const className = computed(() => {
      return `main-layout-sider-menu sider ${props.fixSiderbar ? 'fix-sider-bar' : ''} ${props.theme === Themes.Light ? 'light' : 'dark'}`;
    });

    return {
      handleClickLogo,
      onMenuItemClick,
      className
    };
  }
});
