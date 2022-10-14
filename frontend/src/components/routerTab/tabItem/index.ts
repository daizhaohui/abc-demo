import { defineComponent, ref, onMounted } from '@lincy-vue/core';

export default defineComponent({
  components: {},
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: true
    },
    to: {
      type: Object,
      default: null
    },
    isActive: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number,
      default: -1
    }

  },
  emits: {
    close: null,
    rightClick: null,
    leftClick: null,
    refCreated: null
  },
  setup (props, context) {
    const { emit } = context;
    const isMouseOn = ref(false);

    const onLeftClick = () => {
      emit('leftClick', props.index);
    };
    const onRightClick = (e: any) => {
      emit('rightClick', props.index, e);
    };
    const onClose = () => {
      emit('close', props.index);
    };
    const onMouseenter = () => {
      isMouseOn.value = true;
    };
    const onMouseleave = () => {
      isMouseOn.value = false;
    };

    onMounted(() => {

    });

    return {
      isMouseOn,
      onClose,
      onMouseenter,
      onMouseleave,
      onLeftClick,
      onRightClick
    };
  }
});
