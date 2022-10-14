import { defineComponent, ref, watch } from '@lincy-vue/core';
import MenuIcon from './menuIcon';

export default defineComponent({
  components: {
    MenuIcon
  },
  props: {
    mode: {
      type: String,
      default: 'inline'
    },
    theme: {
      type: String,
      default: 'dark'
    },
    data: {
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
    },
    openKeys: {
      type: Array,
      default: () => {
        return [];
      }
    },
    layout: {
      type: String,
      default: ''
    },
    menuStyle: {
      type: String,
      default: ''
    }
  },
  emits: {
    menuItemClick: null
  },
  setup (props, context) {
    const { emit } = context;
    const keysOfSelected = ref(props.selectedKeys);
    const keysOfOpen = ref(props.openKeys);

    const onMenuItemClick = (e: any) => {
      emit('menuItemClick', e);
    };

    watch(() => props.selectedKeys, (val) => {
      keysOfSelected.value = val;
    });

    watch(() => props.openKeys, (val) => {
      keysOfOpen.value = val;
    });

    return {
      keysOfSelected,
      keysOfOpen,
      onMenuItemClick
    };
  }
});
