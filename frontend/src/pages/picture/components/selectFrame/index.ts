import { defineComponent, onMounted, reactive, toRefs, ref, nextTick } from '@lincy-vue/core';
import { draw, IDrawRect } from '@/utils/draw';


interface IState {
  markList: IDrawRect[],
  contentStyle: string
}

export default defineComponent({
  components: {},
  emits:['change'],
  props:{
    marks: {
      type: Array,
      default: ()=>[]
    },
    image: {
      type: String
    },
    width: {
      type: String,
      default: '800px'
    },
    height: {
      type: String,
      default: '600px'
    }
  },
  setup (props:any) {
    const refCanvas = ref(null);
    const state = reactive<IState>({
      markList: props.marks || [],
      contentStyle: `width:${props.width};height:${props.height}`,
    });

    const initCanvas = ()=>{
      setTimeout(()=>{
        nextTick(() => {
          let cav: any = refCanvas.value;
          let imgContentDom = document.getElementById('imgContent') as HTMLElement;
          cav.width = imgContentDom.offsetWidth;
          cav.height = imgContentDom.offsetHeight;
          let ctx = cav.getContext('2d');
          ctx.strokeStyle = 'blue';
          cav.style.cursor = 'crosshair';
          // 绘制标记框
          let list = state.markList;
          if (list.length !== 0) {
            list.forEach((value)=>{
              ctx.rect(value.x, value.y, value.w, value.h);
              ctx.stroke();
            });
          }
          draw(cav, list);
        })
    },1000)

    };

    onMounted(()=>{
      initCanvas();
    });

    return {
      ...toRefs(state),
      refCanvas,
    }
  }

});