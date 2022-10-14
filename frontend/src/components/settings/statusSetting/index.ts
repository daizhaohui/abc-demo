import { defineComponent, ref, useEmitter } from '@lincy-vue/core';
import { GlobalEvents, HeaderRightContentItems, SettingType } from '@/model/consts';
import { Emitter } from '@lincy-vue/core/types';

export default defineComponent({
  components: {
  },
  props: {
    value: {
      type: Array,
      default: () => {
        return [1, 0];
      }
    }
  },
  setup (props) {
    const isTabsMode = ref(props.value[1]);
    const showFooter = ref(props.value[0]);
    const emitter: Emitter = useEmitter();

    const onShowFooterChange = (val: boolean) => {
      showFooter.value = val;
      emitter.emit(GlobalEvents.OnDrawerItemSettingChanged, {
        target: HeaderRightContentItems.Setting,
        args: {
          type: SettingType.ShowFooter,
          data: val
        }
      });
    };

    const onTabsModeChange = (val: boolean) => {
      isTabsMode.value = val;
      emitter.emit(GlobalEvents.OnDrawerItemSettingChanged, {
        target: HeaderRightContentItems.Setting,
        args: {
          type: SettingType.IsTabMode,
          data: val
        }
      });
    };

    return {
      isTabsMode,
      showFooter,
      onTabsModeChange,
      onShowFooterChange
    };
  }
});
