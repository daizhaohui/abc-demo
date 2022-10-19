import { defineComponent, watch, ref, onMounted, reactive, toRefs, nextTick } from '@lincy-vue/core';
import VideoPlayer from '@/components/videoPlayer';
import DictionaryUtil, { ISelectionEntity } from '@/utils/dictionary';
import { Message } from '@/components';
import Api from '@/api';

interface IPictureState {
  category: string,
  categoryOptions: ISelectionEntity[]
}

export default defineComponent({
  components: {
    VideoPlayer
  },
  emits:["update:visible", "onUpdate"],
  props:{
    visible: {
      type: Boolean,
      default: false
    },
    picture: {
      type: Object,
      default: null,
    }
  },
  setup (props: any, context: any) {
    const { emit } = context;
    const state: IPictureState = reactive({
      category: '',
      categoryOptions: []
    });
    const showDialog = ref(props.visible);
    const handleOk = async () => {
      if (!state.category) {
        Message.warn('请选择一个分类!');
        return;
      }
      const result = await Api.Picture.save({
        pathParams: {
          id: props.picture.id
        },
        data: {
          ...props.picture
        }
      });
      if(result.data && result.data.code === Api.ResponseCode.Success) {
        emit("onUpdate", result.data.data);
        Message.success('保存成功!');
        nextTick(()=>{
          showDialog.value = false;
        })
      }
    };

    const init = async () => {
      const dicionary = await DictionaryUtil.getAllDictionary();
      state.categoryOptions = dicionary.categories;
    }

    watch(()=>props.visible, (v: boolean)=>{
      showDialog.value = v;
      if(v) {
        state.category = props.picture.category;
      }
    })

    watch(showDialog, (v: boolean)=>{
      emit('update:visible', v);
    })

    onMounted(()=>{
      init()
    })

    return {
      ...toRefs(state),
      handleOk,
      showDialog
    }
  }

});