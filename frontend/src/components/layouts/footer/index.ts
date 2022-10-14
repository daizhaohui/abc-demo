import { defineComponent } from '@lincy-vue/core';

export default defineComponent({
  components: {},
  props: {
    // 导航项目
    // {
    //   key: 'Pro',
    //   title: '新浪',
    //   href: 'https://www.sina.com.cn/',
    //   blankTarget: true,
    // },
    links: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  setup () {
    return {};
  }
});
