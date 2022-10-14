import { defineComponent } from '@lincy-vue/core';

export default defineComponent({
  components: {
  },
  props: {
    emptyText: {
      type: String,
      default: ''
    },
    emptyImage: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  emits: {
    itemClick: null
  },
  setup (props, context) {
    const { emit } = context;

    const onClear = () => {
      emit('clear');
    };

    const handleItemClick = (item) => {
      emit('itemClick', {
        type: props.type,
        item
      });
    };

    return {
      onClear,
      handleItemClick
    };
  }
});
