import { defineComponent, watch, ref, onMounted, reactive, toRefs } from '@lincy-vue/core';
import VideoPlayer from '@/components/videoPlayer';
import DictionaryUtil, { ISelectionEntity } from '@/utils/dictionary';
import { Message } from '@/components';
import FrameMark from  '../frameMark';

import Api from '@/api';
import { IPicture } from '@/model'
import { IDrawRect } from '@/utils/draw';

interface IState {
  category: string,
  key: string,
  rectMarks: IDrawRect[]
  categoryOptions: ISelectionEntity[],
  picture: IPicture | null | undefined
}

export default defineComponent({
  components: {
    VideoPlayer,
    FrameMark
  },
  emits:["update:visible", "onUpdate"],
  props:{
    visible: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: null,
    }
  },
  setup (props: any, context: any) {
    const { emit } = context;
    const state: IState = reactive<IState>({
      key: '',
      category: '',
      rectMarks: [],
      categoryOptions: [],
      picture: null
    });
    const pictureWidth = 480;
    const pictureHeight = 480;
    const showDialog = ref(props.visible);
    const handleOk = async () => {
      if (!state.category) {
        Message.warn('请选择一个分类!');
        return;
      }
      const result = await Api.Picture.save({
        pathParams: {
          id: props.id
        },
        data: {
          ...state.picture,
          category: state.category,
          key: state.key,
          label: state.rectMarks.length ? JSON.stringify({
            width: pictureWidth,
            height: pictureHeight,
            rects: state.rectMarks
          }):''
        } as IPicture
      });
      if(result.data && result.data.code === Api.ResponseCode.Success) {
        emit("onUpdate", result.data.data);
        state.picture = result.data.data as unknown as IPicture;
        showDialog.value = false;
        Message.success('保存成功!');
      }
    };

    const handleClearMarks = ()=>{
      state.rectMarks = [];
    }

    const init = async () => {
      const dicionary = await DictionaryUtil.getAllDictionary();
      state.categoryOptions = dicionary.categories;
    }

    watch(()=>props.visible, (v: boolean)=>{
      showDialog.value = v;
      if(v) {
        state.category = state.picture?.category || '';
      }
    })

    watch(()=>props.id, async (id: string)=>{
      const result = await Api.Picture.getDetail({
        pathParams : {
          id
        }
      });
      if (result.data && result.data.code === Api.ResponseCode.Success ){
        state.picture = result.data.data;
        state.category = state.picture?.category || '';
        state.key = state.picture?.key || '';
        if (state.picture?.label) {
          try {
            state.rectMarks = JSON.parse(state.picture.label).rects;
          } catch {
            state.rectMarks = [];
          }
        } else {
          state.rectMarks = [];
        }
      }
    });

    watch(showDialog, (v: boolean)=>{
      emit('update:visible', v);
    })

    onMounted(()=>{
      init()
    })

    return {
      ...toRefs(state),
      handleOk,
      showDialog,
      pictureWidth,
      pictureHeight,
      handleClearMarks
    }
  }

});