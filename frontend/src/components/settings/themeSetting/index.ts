import { defineComponent, useEmitter, ref, watch } from '@lincy-vue/core';
import { GlobalEvents, HeaderRightContentItems, Themes, SettingType } from '@/model/consts';
import { useI18n } from '@lincy-vue/core/lang';
import { Emitter } from '@lincy-vue/core/types';

export default defineComponent({
  components: {},
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const checkedValue = ref(props.value);
    const { t } = useI18n();
    const ThemeOptions = [
      {
        value: Themes.Default,
        label: t('moreSetting.themeDefault')
      },
      {
        value: Themes.Dark,
        label: t('moreSetting.themeDark')
      },
      {
        value: Themes.Light,
        label: t('moreSetting.themeLight')
      }
    ];
    watch(checkedValue, (value) => {
      const emitter: Emitter = useEmitter();
      emitter.emit(GlobalEvents.OnDrawerItemSettingChanged, {
        target: HeaderRightContentItems.Setting,
        args: {
          type: SettingType.Theme,
          data: value
        }
      });
    });

    watch(() => props.value, (val) => {
      checkedValue.value = val;
    });

    return {
      ThemeOptions,
      checkedValue
    };
  }
});
