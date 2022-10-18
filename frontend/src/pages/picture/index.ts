import { defineComponent, reactive, ref, toRefs, onMounted, useRouter, useRoute } from '@lincy-vue/core';
import Api from '@/api';
import PaginationUtil from '@/utils/pagination';
import { IRouteLocationNormalized, IRouterService } from '@lincy-vue/core/types';
import PictureEditModal from './pictureEdit'

interface IDataItem {
  title: string;
}
const data: IDataItem[] = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

export default defineComponent({
  components: {
    'picture-edit-modal': PictureEditModal,
  },
  props: {

  },
  setup () {
    const spinning = ref(false);
    const contentHeight = ref('600px');
    const router: IRouterService = useRouter();
    const route: IRouteLocationNormalized = useRoute();
    // 查询条件数据
    const formState = reactive({
      area: '',
      line: '',
      station: '',
    });
    const state = reactive({
      pictureModalVisible: false,
      pictureOptions: null,
    })
    const dataSource = ref([] as IDataItem[]);
    const pagination = PaginationUtil.createPagination((p: any) => { loadData(p); });
    // 重置查询条件按钮事件
    const onReset = () => {
      formState.area = '';
      formState.line = '';
      formState.station = '';
    };

    // 点击查询
    const onQuery = () => {
    };

    const loadData = (p?: any) => {
      dataSource.value = data;
    };

    const handleEdit = (item: IDataItem) => {
      state.pictureModalVisible = true;
    };


    onMounted(() => {
      loadData()
    });

    return {
      ...toRefs(state),
      dataSource,
      formState,
      contentHeight,
      spinning,
      pagination,
      handleEdit,
      onReset,
      onQuery
    };
  }
});