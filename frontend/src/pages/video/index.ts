import { defineComponent, reactive, ref, toRefs, onMounted } from '@lincy-vue/core';
import Api from '@/api';
import PaginationUtil from '@/utils/pagination';
import VideoModal from '@/components/videoModal';
import DictionaryUtil, {ISelectionEntity, IAllDictionary } from '@/utils/dictionary';
import { IQueryState, IVideo } from '@/model';
interface IState {
  videoModalVisible: boolean,
  videoOptions: Record<string, string> | null,
  spinning: boolean,
  areaOptions: ISelectionEntity[],
  lineOptions: ISelectionEntity[],
  stationOptions: ISelectionEntity[],
  dataSource: IVideo[],
}

export default defineComponent({
  components: {
    'video-modal': VideoModal,
  },
  props: {

  },
  setup () {
    const contentHeight = ref('600px');
    let dicionary: IAllDictionary;
    // 查询条件数据
    const queryState = reactive<IQueryState>({
      area: '',
      line: '',
      station: '',
    });
    const state = reactive<IState>({
      videoModalVisible: false,
      videoOptions: null,
      spinning: false,
      areaOptions: [],
      lineOptions: [],
      stationOptions: [],
      dataSource: []
    })
    const pagination = PaginationUtil.createPagination((p: any) => { loadData(p); });

    // 重置查询条件按钮事件
    const onReset = () => {
      queryState.area =  dicionary.areas.length ?  dicionary.areas[0].value : '';
      queryState.line = '';
      queryState.station = '';
    };

    // 点击查询
    const onQuery = () => {
    };

    //初始化下拉选择框
    const init = async () => {
      dicionary = await DictionaryUtil.getAllDictionary();
      state.areaOptions = dicionary.areas;
      if(dicionary.areas.length) {
        queryState.area = dicionary.areas[0].value;
        state.lineOptions = DictionaryUtil.createLineOptions(dicionary.lines, queryState.area);
        state.stationOptions = DictionaryUtil.createStationOptions(dicionary.stations, '', '');
      }
    };

    const loadData = async (p?: any) => {
      state.spinning = true;

      state.spinning = false;
    };

    const handleEdit = (item: IVideo) => {
      state.videoModalVisible = true;
    };

    const handleAreaChange = (value: string) =>{
      state.lineOptions = DictionaryUtil.createLineOptions(dicionary.lines, queryState.area);
      queryState.line = '';
      queryState.station = '';
    };

    const handleLineChange = (value: string) =>{
      state.stationOptions = DictionaryUtil.createStationOptions(dicionary.stations, queryState.area, queryState.line);
      queryState.station = '';
    };

    onMounted(() => {
      init();
      loadData()
    });

    return {
      ...toRefs(state),
      queryState,
      contentHeight,
      pagination,
      handleAreaChange,
      handleLineChange,
      handleEdit,
      onReset,
      onQuery
    };
  }
});
