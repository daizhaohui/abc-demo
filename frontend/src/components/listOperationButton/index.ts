import { defineComponent, watch, ref } from '@lincy-vue/core';

export default defineComponent({
  components: {},
  props: {
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    click: null
  },
  setup (props, context) {
    const disableButton = ref(props.disabled);
    const { emit } = context;
    const onClick = () => {
      emit('click');
    };

    watch(() => props.disabled, (val) => {
      disableButton.value = val;
    });

    return {
      onClick,
      disableButton
    };
  }
});
