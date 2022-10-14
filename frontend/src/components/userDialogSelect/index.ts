import { defineComponent, ref, reactive, watch, onMounted } from '@lincy-vue/core';
import Api from '@/api';
import { ApiCode } from '@/model/consts';
import PaginationUtil from '@/utils/pagination';

export default defineComponent({
  components: {
  },
  props: {
    selectedValue: {
      type: Array,
      default: () => {
        return [];
      }
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    selected: null,
    'update:visible': null
  },
  setup (props, context) {
    const columns = [
      {
        title: '账号',
        dataIndex: 'account',
        key: 'account'
      },
      {
        title: '姓名',
        dataIndex: 'realName',
        key: 'realName'
      },
      {
        title: '所属机构',
        dataIndex: 'orgName',
        key: 'orgName',
        ellipsis: true
      },
      {
        title: '手机',
        dataIndex: 'phone',
        key: 'phone'
      },
      {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email',
        ellipsis: true // 过长显示省略号
      }
    ];

    const { emit } = context;
    const dataSource = ref([]);
    const pagination = PaginationUtil.createPagination((p) => { loadUsers(p); });
    const formState = reactive({
      orgId: '',
      realName: '',
      account: ''
    });
    const loading = ref(false);
    const dialogVisible = ref(props.visible);
    let selectedUsers: any[] = [];

    const loadUsers = (pagination: any) => {
      loading.value = true;
      Api.User.getOrgUsers({
        params: createUserParams(pagination)
      }).then((res: any) => {
        const { data, code } = res.data;
        if (data && code === ApiCode.Success) {
          pagination.total = data.totalRows;
          dataSource.value = data.rows;
        }
        loading.value = false;
      }).catch((err: any) => {
        loading.value = false;
        console.log(err);
      });
    };

    const rowSelection = {
      onChange: (selectedRowKeys: any[], selectedRows: any[]) => {
        selectedUsers = selectedRows.map(item => {
          return {
            userId: item.userId,
            account: item.account,
            realName: item.realName
          };
        });
      }
    };

    const onQuery = () => {
      loadUsers(pagination);
    };

    const onReset = () => {
      formState.orgId = '';
      formState.realName = '';
      formState.account = '';
      loadUsers(pagination);
    };

    const onOk = () => {
      dialogVisible.value = false;
      emit('update:visible', false);
      emit('selected', selectedUsers);
    };

    const onCancel = () => {
      emit('update:visible', false);
      dialogVisible.value = false;
    };

    const createUserParams = (pagination: any) => {
      return {
        page: pagination.current,
        limit: pagination.pageSize,
        orgId: formState.orgId,
        account: formState.account,
        realName: formState.realName
      };
    };

    watch(() => props.visible, (val) => {
      dialogVisible.value = val;
    });

    onMounted(() => {
      loadUsers(pagination);
    });

    return {
      pagination,
      columns,
      dataSource,
      dialogVisible,
      rowSelection,
      loading,
      formState,
      onQuery,
      onOk,
      onCancel,
      onReset
    };
  }
});
