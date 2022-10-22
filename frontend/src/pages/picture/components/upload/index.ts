import { defineComponent, watch, ref, onMounted, reactive, toRefs } from '@lincy-vue/core';
import DictionaryUtil, { IAllDictionary, ISelectionEntity } from '@/utils/dictionary';
import { Message } from '@/components';
import Api from '@/api';

interface IFormState {
  title: string,
  area: string,
  line: string,
  station: string,
  file: any
}

interface IState {
  areaOptions:ISelectionEntity[],
  lineOptions: ISelectionEntity[],
  stationOptions: ISelectionEntity[],
  spinning: boolean,
}

export default defineComponent({
  components: {
  },
  emits:["update:visible", "onSuccess"],
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
    const showDialog = ref(props.visible);
    const fileList = ref([]);
    let dicionary: IAllDictionary;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    const formState = reactive<IFormState>({
      title: '',
      area: '',
      line: '',
      station: '',
      file: []
    });
    const state = reactive<IState>({
      areaOptions:[],
      lineOptions: [],
      stationOptions: [],
      spinning: false,
    });

    const handleCancel = ()=>{
      showDialog.value = false;
    };

    const handleAreaChange = ()=>{
      state.lineOptions = dicionary.lines.filter(item=>item.data?.areaCode === formState.area);
      if(state.lineOptions.length){
        formState.line = state.lineOptions[0].value;
        state.stationOptions = dicionary.stations.filter(item=>item.data?.areaCode === formState.area && item.data?.lineCode === formState.line);
        if(state.stationOptions.length){
          formState.station = state.stationOptions[0].value;
        } else {
          formState.station ='';
        }
      } else {
        formState.line = '';
      }
    };

    const handleLineChange = ()=>{
      state.stationOptions = dicionary.stations.filter(item=>item.data?.areaCode === formState.area && item.data?.lineCode === formState.line);
      if(state.stationOptions.length){
        formState.station = state.stationOptions[0].value;
      } else {
        formState.station ='';
      }
    };

    const resetValues = () => {
      formState.file = null;
      fileList.value = [];
      formState.title = '';
    }

    const handleSubmit = async () => {
      state.spinning = true;
      Api.Picture.upload({
       ...formState
      }).then((result:any)=>{
        state.spinning = false;
        if(result.data && result.data.code === Api.ResponseCode.Success) {
          resetValues();
          emit("onSuccess");
          showDialog.value = false;
          Message.success('保存成功!');
        } else {
          Message.error('上传失败, 请稍后再试!');
        }
      }).catch((err)=>{
        state.spinning = false;
        console.error(err);
        Message.warn('上传失败, 请稍后再试...')
      });
     
    };

    const handleFileChange = (info: any)=>{
       formState.file = info.file.originFileObj;
       fileList.value = info.fileList.slice(-1);
    };

    const handleCustomRequest = ()=>{

    };

    const init = async () => {
      dicionary = await DictionaryUtil.getAllDictionary();
      state.areaOptions = dicionary.areas;
      if(dicionary.areas.length) {
        formState.area = dicionary.areas[0].value;
        state.lineOptions = dicionary.lines.filter(item=>item.data?.areaCode===formState.area);
        if(state.lineOptions.length) {
          formState.line = state.lineOptions[0].value;
          state.stationOptions = dicionary.stations.filter(item=>item.data?.areaCode===formState.area && item.data?.lineCode===formState.line);
          formState.station = state.stationOptions.length ? state.stationOptions[0].value : '';
        }
      }
    }

    watch(()=>props.visible, (v: boolean)=>{
       showDialog.value = v;
    })


    watch(showDialog, (v: boolean)=>{
      emit('update:visible', v);
    })

    onMounted(()=>{
      init()
    })

    return {
      formState,
      ...toRefs(state),
      handleLineChange,
      handleSubmit,
      handleCancel,
      handleAreaChange,
      handleFileChange,
      handleCustomRequest,
      fileList,
      formItemLayout,
      showDialog
    }
  }

});