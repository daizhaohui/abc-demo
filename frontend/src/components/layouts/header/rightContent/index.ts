import { defineComponent, useEmitter } from '@lincy-vue/core';
import BaseMenu from '@/components//baseMenu';
import DrawerSetting from '../../drawerSetting';
import HeaderItems from '@/components/headers';
import { GlobalEvents } from '@/model/consts';
import { Emitter } from '@lincy-vue/core/types';

const components: any = {};
HeaderItems.forEach(item => {
  components[item.name] = item.component;
});
components['drawer-setting'] = DrawerSetting;
components['base-menu'] = BaseMenu;

export default defineComponent({
  components,
  props: {
    theme: {
      type: String,
      default: ''
    }
  },
  emits: {},
  setup () {
    const onMoreSettingClick = () => {
      const emitter: Emitter = useEmitter();
      emitter.emit(GlobalEvents.OnShowDrawerSetting);
    };

    return {
      onMoreSettingClick,
      HeaderItems
    };
  }
});
