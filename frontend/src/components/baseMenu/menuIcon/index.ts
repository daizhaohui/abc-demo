import { defineComponent } from '@lincy-vue/core';

export default defineComponent({
  components: {},
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  emits: {},
  setup (props) {
    // 全局注册的icon图标以icon-开始，请见icons/index.js
    const isComponent = props.url && `${props.url}`.includes('icon-');

    return {
      isComponent
    };
  }
});
