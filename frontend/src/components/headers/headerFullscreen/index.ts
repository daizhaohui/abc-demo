import { defineComponent, ref } from '@lincy-vue/core';
import { useI18n } from '@lincy-vue/core/lang';

export default defineComponent({
  components: {},
  props: {
    theme: {
      type: String,
      default: ''
    }
  },
  emits: {},
  setup () {
    const { t } = useI18n();
    const isFullscreen = ref(false);
    const tooltipTitle = ref(t('topRightMenu.fullScreen'));
    const onFullScreen = () => {
      const doc: any = document;
      const s = doc.fullscreenElement || doc.msFullscreenElement || doc.mozFullScreenElement || doc.webkitFullscreenElement || false;
      if (s) {
        const r = document.exitFullscreen || doc.webkitExitFullscreen || doc.mozCancelFullScreen || doc.msExitFullscreen;
        if (r) {
          r.call(document);
        } else {
          if (window.ActiveXObject) {
            const t = new window.ActiveXObject('WScript.Shell');
            t && t.SendKeys('{F11}');
          }
        }
        isFullscreen.value = false;
      } else {
        const i: any = document.documentElement;
        const q = i.requestFullscreen || i.webkitRequestFullscreen || i.mozRequestFullScreen || i.msRequestFullscreen;
        if (q) {
          q.call(i);
        } else {
          if (window.ActiveXObject) {
            const u = new window.ActiveXObject('WScript.Shell');
            u && u.SendKeys('{F11}');
          }
        }
        isFullscreen.value = true;
      }
      tooltipTitle.value = isFullscreen.value ? t('common.exit') + t('topRightMenu.fullScreen') : t('topRightMenu.fullScreen');
    };

    return {
      isFullscreen,
      onFullScreen,
      tooltipTitle
    };
  }
});
