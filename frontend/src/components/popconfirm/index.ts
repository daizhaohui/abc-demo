import { defineComponent } from '@lincy-vue/core';

export default defineComponent({
  components: {
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  emits: {
    confirm: null,
    cancel: null
  },
  setup (props, context) {
    const { emit } = context;

    const onConfirm = () => {
      emit('confirm');
    };

    const onCancel = () => {
      emit('cancel');
    };

    return {
      onConfirm,
      onCancel
    };
  }
});
