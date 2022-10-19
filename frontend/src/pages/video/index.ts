import { defineComponent, reactive, ref, toRefs, onMounted } from '@lincy-vue/core';
import Api from '@/api';
import { Message } from '@/components';
import PaginationUtil, { IPagination } from '@/utils/pagination';
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
  dataSource: IVideo[] | undefined | null,
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
    const pagination = PaginationUtil.createPagination((p: IPagination) => { loadData(p); });

    // 重置查询条件按钮事件
    const onReset = () => {
      queryState.area =  dicionary.areas.length ?  dicionary.areas[0].value : '';
      queryState.line = '';
      queryState.station = '';
    };

    // 点击查询
    const onQuery = () => {
      loadData(pagination);
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

    const createQueryParams = (p: IPagination)=> {
      const params = {
        ...queryState,
        current: p.current,
        pageSize: p.pageSize
      };
      return params;
    }

    const loadData = async (p: IPagination) => {
      const params = createQueryParams(p);
      if (params.area) {
        Message.warn('请选择地区条件！');
        return;
      }
      try {
        state.spinning = true;
        const result = await Api.Video.getList({
          params
        })
        if( result.data && result.data.code === Api.ResponseCode.Success) {
          state.dataSource = result.data.data
        } else {
          Message.error(result.data.message || '加载失败,请稍后再试！');
        } 
        // 更新
        state.spinning = false;
      } catch (err) {
        state.spinning = false;
        Message.error('加载失败,请稍后再试！');
        console.log(err);
      }
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
      loadData(pagination);
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
