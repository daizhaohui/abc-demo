import { defineComponent, useEmitter, watch, ref } from '@lincy-vue/core';
import { GlobalEvents, HeaderRightContentItems, MenuLayout, SettingType } from '@/model/consts';
import { useI18n } from '@lincy-vue/core/lang';
import { Emitter } from '@lincy-vue/core/types';

export default defineComponent({
  components: {
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const checkedValue = ref(props.value);
    const { t } = useI18n();
    const NavOptions = [
      {
        value: MenuLayout.Sider,
        label: t('moreSetting.navSider')
      },
      {
        value: MenuLayout.Top,
        label: t('moreSetting.navTop')
      },
      {
        value: MenuLayout.SiderTop,
        label: t('moreSetting.navSiderTop')
      }
    ];

    watch(checkedValue, (value) => {
      const emitter: Emitter = useEmitter();
      emitter.emit(GlobalEvents.OnDrawerItemSettingChanged, {
        target: HeaderRightContentItems.Setting,
        args: {
          type: SettingType.MenuLayout,
          data: value
        }
      });
    });

    watch(() => props.value, (val) => {
      checkedValue.value = val;
    });

    return {
      NavOptions,
      checkedValue
    };
  }
});
