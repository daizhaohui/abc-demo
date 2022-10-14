import { defineComponent, ref, watch, useEmitter, reactive } from '@lincy-vue/core';
import { GlobalEvents, HeaderRightContentItems } from '@/model/consts';
import SettingItems from '@/components/settings';
import { Emitter } from '@lincy-vue/core/types';

const emitter: Emitter = useEmitter();
const components: any = {};
SettingItems.forEach((item: any) => {
  components[item.name] = item.component;
});

export default defineComponent({
  components,
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object,
      default: null
    }
  },
  emits: {
    settingChange: null,
    close: null
  },
  setup (props, context) {
    const { emit } = context;
    const isVisible = ref(props.visible);
    const settings = reactive(props.value);

    const togglerContent = () => {
      isVisible.value = false;
      emit('close');
      emitter.emit(
        GlobalEvents.OnCloseSettingDrawer,
        {
          target: HeaderRightContentItems.Setting,
          args: {}
        }
      );
    };

    const onConfirm = () => {
      // 触发全局退出事件
      emitter.emit(
        GlobalEvents.OnLogout
      );
    };

    watch(() => props.value, (val) => {
      Object.keys(val).forEach(key => {
        settings[key] = val[key];
      });
    });

    watch(() => props.visible, (val) => {
      isVisible.value = val;
    });

    return {
      SettingItems,
      isVisible,
      settings,
      togglerContent,
      onConfirm

    };
  }
});
