import { defineComponent } from '@lincy-vue/core';
import { Message } from '@/components';

export default defineComponent({
  components: {},
  props: {
    theme: {
      type: String,
      default: ''
    }
  },
  emits: {},
  setup () {
    const handleHelpClick = () => {
      Message.info('跳转Help');
    };
    return {
      handleHelpClick
    };
  }
});
