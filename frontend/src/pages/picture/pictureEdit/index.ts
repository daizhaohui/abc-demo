import { defineComponent, watch, ref } from '@lincy-vue/core';
import VideoPlayer from '@/components/videoPlayer';

export default defineComponent({
  components: {
    VideoPlayer
  },
  emits:["update:visible"],
  props:{
    visible: {
      type: Boolean,
      default: false
    },
    video: {
      type: Object,
      default: null,
    }
  },
  setup (props: any, context: any) {
    const { emit } = context;
    const showDialog = ref(props.visible);
    const handleOk = () => {

    };

    watch(()=>props.visible, (v: boolean)=>{
      showDialog.value = v;
    })

    watch(showDialog, (v: boolean)=>{
      emit('update:visible', v);
    })

    return {
      handleOk,
      showDialog
    }
  }

});