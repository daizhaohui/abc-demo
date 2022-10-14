<template>
  <send-captcha-button
    :size="size"
    :disabled="start"
    @click="handleClick"
  >
    {{ runText }}
  </send-captcha-button>
</template>

<script>
import { Button } from 'ant-design-vue';
import { defineComponent, onUnmounted, watch, onBeforeMount, ref } from '@lincy-vue/core';
import sessionStorage from '@lincy-vue/core/state/sessionStorage';

export default defineComponent({
  components: {
    'send-captcha-button': Button
  },
  props: {
    size: {
      type: String,
      default: 'large'
    },
    text: {
      type: String,
      default: '获取验证码'
    },
    second: {
      default: 60,
      validator (val) {
        return /^\d*$/.test(val);
      }
    },
    modelValue: {
      default: false,
      type: Boolean
    },
    storageKey: {
      default: '__SendCaptchaStorageKey__',
      type: String
    }
  },
  setup (props, context) {
    const { emit } = context;
    let lastSecond = 0;
    let timer = null;

    const start = ref(false);
    const runText = ref(props.text);

    const run = () => {
      let second = lastSecond || props.runSecond;
      if (props.storageKey) {
        sessionStorage.set(props.storageKey, new Date().getTime() + second * 1000);
      }
      if (!lastSecond) {
        runText.value = getStr(second);
      }
      timer = setInterval(() => {
        second--;
        runText.value = getStr(second);
        second <= 0 && timeout();
      }, 1000);
    };
    const timeout = () => {
      runText.value = '重新获取';
      start.value = false;
      emit('update:modelValue', false);
      clearInterval(timer);
    };

    const getStr = (second) => {
      return '{%s}秒后重试'.replace(/\{([^{]*?)%s(.*?)\}/g, second);
    };

    const handleClick = () => {
      emit('click');
    };

    onBeforeMount(() => {
      const ls = ~~(
        (sessionStorage.get(props.storageKey) - new Date().getTime()) /
        1000
      );
      if (ls > 0 && props.storageKey) {
        emit('update:modelValue', true);
        runText.value = getStr(ls);
        lastSecond = ls;
      }
    });

    onUnmounted(() => {
      props.storageKey && timeout();
    });

    watch(() => props.modelValue, (val) => {
      start.value = val;
      if (!val) {
        clearInterval(timer);
        if (props.storageKey) {
          sessionStorage.removeItem(props.storageKey);
          lastSecond = 0;
        }
      } else {
        run();
      }
    });

    return {
      start,
      runText,
      handleClick
    };
  }
});

</script>
