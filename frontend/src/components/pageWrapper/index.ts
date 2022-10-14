import { defineComponent, inject, ref, onMounted, computed } from '@lincy-vue/core';
import GlobalState from '@/state';
import { MenuLayout } from '@/model/consts';
import PageHeader from './header';

export default defineComponent({
  components: {
    PageHeader
  },
  props: {
    // 是否显示页头
    showPageHeader: {
      type: Boolean,
      default: true
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 子标题
    subTitle: {
      type: String,
      default: ''
    },
    // 头像
    avatar: {
      type: String,
      default: ''
    },
    spinning: {
      type: Boolean,
      default: false
    },
    // 是否现实会退按钮
    showBack: {
      type: Boolean,
      default: true
    }
  },
  emits: {
    back: null
  },
  setup (props, context) {
    const { emit } = context;
    const refPageHeader = ref();
    const setPageHeaderRef: any = inject('setPageHeaderRef');

    const pageHeaderIsVisible = computed(() => {
      return props.showPageHeader && !GlobalState.Settings.isTabsMode;
    });

    const onBack = () => {
      emit('back');
    };

    const contentStyle = computed(() => {
      if (GlobalState.Settings.currentMenuLayout === MenuLayout.Top) {
        return 'padding:16px 0 0 0;';
      } else {
        return 'padding:16px 16px';
      }
    });

    onMounted(() => {
      setPageHeaderRef(refPageHeader.value);
    });

    return {
      onBack,
      refPageHeader,
      contentStyle,
      pageHeaderIsVisible
    };
  }
});
