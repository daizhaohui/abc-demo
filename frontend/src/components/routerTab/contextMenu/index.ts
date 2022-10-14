import { defineComponent, watch, reactive } from '@lincy-vue/core';

export default defineComponent({
  components: {},
  props: {
    disabledButtons: {
      type: Object,
      default: () => {
        return {
          close: false,
          refresh: false,
          closeOthers: false,
          closeToRight: false,
          closeAll: false
        };
      }
    }
  },
  emits: {
    itemClick: null,
    close: null
  },
  setup (props, context) {
    const { emit } = context;
    const onItemClick = (action: string) => {
      emit('itemClick', action);
    };
    const onVisibleChange = (visible: boolean) => {
      if (!visible) {
        emit('close');
      }
    };
    const disables = reactive({
      ...props.disabledButtons
    });

    watch(props.disabledButtons, (val) => {
      Object.keys(disables).forEach(k => {
        disables[k] = val[k];
      });
    }, { deep: true });

    return {
      onItemClick,
      disables,
      onVisibleChange
    };
  }
});
