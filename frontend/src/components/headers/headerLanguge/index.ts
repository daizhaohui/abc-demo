import { defineComponent, useEmitter, ref } from '@lincy-vue/core';
import { DictionaryName, GlobalEvents, HeaderRightContentItems } from '@/model/consts';
import DicionaryUtils from '@/utils/dictionary';
import { getLocale } from '@lincy-vue/core/lang';

export default defineComponent({
  components: {},
  props: {
    theme: {
      type: String,
      default: ''
    }
  },
  setup () {
    const checkedValue: any = ref(getLocale());
    const Languages: any[] | null = DicionaryUtils.getDictionary(DictionaryName.Language);
    const languages = Languages ? Languages[checkedValue.value] : [];

    const handleSwtichLanguge = (e: any) => {
      const emitter = useEmitter();
      emitter.emit(GlobalEvents.OnHeaderRightContentItemClick, {
        target: HeaderRightContentItems.Language,
        args: {
          data: e
        }
      });
      checkedValue.value = e;
    };

    return {
      handleSwtichLanguge,
      checkedValue,
      languages
    };
  }
});
