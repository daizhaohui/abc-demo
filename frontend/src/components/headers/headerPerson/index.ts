import { defineComponent, useEmitter } from '@lincy-vue/core';
import { HeaderRightContentItems, GlobalEvents } from '@/model/consts';
import { DefaultHeadImage } from '@/utils/images';
import { Emitter } from '@lincy-vue/core/types';

export default defineComponent({
  components: {},
  props: {
    // 头像
    headImage: {
      type: String,
      default: DefaultHeadImage
    },
    userName: {
      type: String,
      default: 'Daniel'
    },
    theme: {
      type: String,
      default: ''
    }
  },
  setup () {
    const handleItemClick = (e: any) => {
      const emitter: Emitter = useEmitter();
      emitter.emit(GlobalEvents.OnHeaderRightContentItemClick, {
        target: HeaderRightContentItems.Person,
        args: {
          type: e
        }
      });
    };

    return {
      handleItemClick
    };
  }
});
