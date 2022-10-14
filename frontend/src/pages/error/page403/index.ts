import { defineComponent } from '@lincy-vue/core';

export default defineComponent({
  components: {},
  setup () {
    const onBack = () => {
      window.history.back(-1);
    };

    return {
      onBack
    };
  }
});
