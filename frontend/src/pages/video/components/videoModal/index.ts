import { defineComponent, watch, ref, reactive, toRefs } from '@lincy-vue/core';
import VideoPlayer from '@/components/videoPlayer';

interface IState {
  url: string,
  poster: string,
  showDialog: boolean
}

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
    const state = reactive<IState>({
      url: '',
      poster: '',
      showDialog: props.visible,
    })
    const handleOk = () => {

    };

    watch(()=>props.visible, (v: boolean)=>{
      state.showDialog = v;
    })

    watch(()=>props.video, ()=>{
      state.url = props.video.url;
      state.poster = props.video.poster;
    })

    watch(()=>state.showDialog, (v: boolean)=>{
      emit('update:visible', v);
    })

    return {
      handleOk,
      ...toRefs(state)
    }
  }

});