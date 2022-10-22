import { defineComponent, reactive, ref, toRefs, onMounted } from '@lincy-vue/core';
import Api from '@/api';
import { Message } from '@/components';
import PaginationUtil, { IPagination } from '@/utils/pagination';
import PictureModal from './components/pictureModal';
import DictionaryUtil, {ISelectionEntity, IAllDictionary } from '@/utils/dictionary';
import { IQueryState, IPicture } from '@/model';
interface IState {
  pictureModalVisible: boolean,
  pictureId: string,
  spinning: boolean,
  areaOptions: ISelectionEntity[],
  lineOptions: ISelectionEntity[],
  stationOptions: ISelectionEntity[],
  categoryOptions: ISelectionEntity[],
  labeledOptions: ISelectionEntity[],
  dataSource: IPicture[]
}

export default defineComponent({
  components: {
    'picture-modal': PictureModal,
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
      category: '',
      labeled: '',
      key: '',
    });
    const state = reactive<IState>({
      pictureModalVisible: false,
      pictureId: '',
      spinning: false,
      areaOptions: [],
      lineOptions: [],
      stationOptions: [],
      categoryOptions: [],
      labeledOptions: [],
      dataSource: [],
    })
    const pagination = PaginationUtil.createListPagination((p: IPagination) => { loadData(p); }, {});

    // 重置查询条件按钮事件
    const onReset = () => {
      queryState.area =  dicionary.areas.length ?  dicionary.areas[0].value : '';
      queryState.line = '';
      queryState.station = '';
      queryState.category = '';
      queryState.labeled = '';
      queryState.key = '';
    };

    // 点击查询
    const onQuery = () => {
      if (!queryState.area) {
        Message.warn('请选择地区条件！');
        return;
      }
      pagination.current = 1;
      loadData(pagination);
    };

    //初始化下拉选择框
    const init = async () => {
      dicionary = await DictionaryUtil.getAllDictionary();
      state.areaOptions = dicionary.areas;
      state.categoryOptions = DictionaryUtil.createCategoryOptions(dicionary.categories);
      if(dicionary.areas.length) {
        queryState.area = dicionary.areas[0].value;
        state.lineOptions = DictionaryUtil.createLineOptions(dicionary.lines, queryState.area);
        state.stationOptions = DictionaryUtil.createStationOptions(dicionary.stations, '', '');
      }
      state.labeledOptions = DictionaryUtil.createLabeledOptions();
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
      if (!params.area) {
        return;
      }
      try {
        state.spinning = true;
        const result = await Api.Picture.getList({
          params
        })
        if( result.data && result.data.code === Api.ResponseCode.Success) {
          pagination.total = result.data.data.total;
          state.dataSource = result.data.data.data;
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

    const handleEdit = (item: IPicture) => {
      state.pictureId = item.id + '';
      state.pictureModalVisible = true;
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

    const handleOnUpdate = (picture: IPicture) =>{
      const index = state.dataSource?.findIndex(item=>item.id===picture.id);
      if (index) {
        state.dataSource[index] = picture;
      }
    };

    onMounted(async () => {
      await init();
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
      onQuery,
      handleOnUpdate
    };
  }
});
