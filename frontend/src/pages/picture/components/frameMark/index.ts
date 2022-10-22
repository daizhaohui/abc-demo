import { defineComponent, onMounted, reactive, toRefs, ref, nextTick, watch } from '@lincy-vue/core';
import { RectDrawer, IDrawRect } from '@/utils/draw';
interface IState {
  markList: IDrawRect[],
  contentStyle: string
}

export default defineComponent({
  components: {},
  emits:['change', 'update:marks'],
  props:{
    marks: {
      type: Array,
      default: ()=>[]
    },
    image: {
      type: String
    },
    width: {
      type: Number,
      default: 800
    },
    height: {
      type: Number,
      default: 600
    }
  },
  setup (props:any, {emit}) {
    const refCanvas = ref(null);
    const state = reactive<IState>({
      markList: props.marks || [],
      contentStyle: `width:${props.width}px;height:${props.height}px`,
    });
    const rectDrawer = new RectDrawer();

    const drawRects = ()=>{
      let cav: any = refCanvas.value;
      let imgContentDom = document.getElementById('img-content') as HTMLElement;
      cav.width = imgContentDom.offsetWidth;
      cav.height = imgContentDom.offsetHeight;
      let ctx = cav.getContext('2d');
      ctx.strokeStyle = 'blue';
      cav.style.cursor = 'crosshair';
      // 绘制标记框
      if (state.markList.length !== 0) {
        state.markList.forEach((value)=>{
          ctx.rect(value.x, value.y, value.w, value.h);
          ctx.stroke();
        });
      }
      rectDrawer.drawRect(cav, state.markList);
    }

    const initCanvas = ()=>{
      setTimeout(()=>{
        nextTick(() => {
          drawRects();
        });
      },1000);
    };

    watch(()=>state.markList.length, ()=>{
      nextTick(()=>{
        emit('update:marks', state.markList);
      });
    });

    watch(()=>props.marks, ()=>{
      state.markList = props.marks;
      drawRects();
    });

    onMounted(()=>{
      initCanvas();
    });

    return {
      ...toRefs(state),
      refCanvas,
    }
  }

});