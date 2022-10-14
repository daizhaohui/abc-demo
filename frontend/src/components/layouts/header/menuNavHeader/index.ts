import { defineComponent, computed, useEmitter, ref, onMounted, inject, watch } from '@lincy-vue/core';
import { GlobalEvents } from '@/model/consts';
import RightContent from '../rightContent';
import BaseMenu from '../../../baseMenu';
import { Emitter } from '@lincy-vue/core/types';

export default defineComponent({
  components: {
    RightContent,
    BaseMenu
  },
  props: {
    mode: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: ''
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    // logo图片
    logo: {
      type: String,
      default: ''
    },
    // 菜单项
    menuItems: {
      type: Array,
      default: () => {
        return [];
      }
    },
    // 顶部菜单头最大宽度
    maxTopMenuHeaderWidth: {
      type: Number,
      default: 1280
    }
  },
  emits: {
    menuItemClick: null
  },
  setup (props, context) {
    const { emit } = context;
    const refPageHeader = ref();
    const widthStyle = ref(`max-width:${props.maxTopMenuHeaderWidth}px;`);
    const setTopMenuHeaderRef: any = inject('setTopMenuHeaderRef');

    // 点击了logo
    const clickLogo = () => {
      const emitter: Emitter = useEmitter();
      emitter.emit(GlobalEvents.OnLogoClick, {
        target: 'logo',
        args: {}
      });
    };

    const onMenuItemClick = (e: any) => {
      emit('menuItemClick', e);
    };

    const menuWidthStyle = computed(() => {
      return `max-width:${props.maxTopMenuHeaderWidth - 330 - 165 - 40};`;
    });

    watch(() => props.maxTopMenuHeaderWidth, (width) => {
      widthStyle.value = `max-width:${width}px;`;
    });

    onMounted(() => {
      setTopMenuHeaderRef(refPageHeader.value);
    });

    return {
      refPageHeader,
      widthStyle,
      menuWidthStyle,
      onMenuItemClick,
      clickLogo
    };
  }
});
