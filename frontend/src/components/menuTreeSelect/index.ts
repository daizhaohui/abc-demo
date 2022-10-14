import { defineComponent, ref, watch, onMounted } from '@lincy-vue/core';
import Api from '@/api';
import TreeUtil from '@/utils/tree';

export default defineComponent({
  components: {
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    // 当前选中的节点
    nodeValue: {
      type: Array,
      default: null
    },
    // 是否自动加载菜单数据，手动请指定data数据
    autoLoadData: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    }
  },
  emits: {
    confirm: null,
    cancel: null,
    change: null,
    select: null,
    'update:nodeValue': null,
    'update:value': null

  },
  setup (props, context) {
    const { emit } = context;
    const treeData: any = ref([]);
    const selectedValue = ref(props.value);
    let menuTree: any = null;

    const createTreeData = (data: any) => {
      menuTree = TreeUtil.createMenuTree(data);
      treeData.value = [menuTree.rootNode];
      if (props.value) {
        if (props.nodeValue && menuTree) {
          emit('update:nodeValue', menuTree.getNode(props.value));
        }
        selectedValue.value = props.value;
      }
    };

    watch(() => props.value, (val) => {
      selectedValue.value = val;
    });

    watch(() => selectedValue.value, (val) => {
      if (props.nodeValue && menuTree) {
        if (val) {
          const node = menuTree.getNode(val);
          emit('update:nodeValue', node);
        } else {
          emit('update:nodeValue', null);
        }
      }
    });

    watch(() => props.data, (val) => {
      if (!props.autoLoadData) {
        createTreeData(val);
      }
    });

    const onChange = (value: any, label: string, extra: any) => {
      emit('update:value', value || '');
      emit('change', value, label, extra);
    };

    const onSelect = (value: any, node: any, extra: any) => {
      emit('change', value, node, extra);
    };

    onMounted(() => {
      if (props.autoLoadData) {
        Api.Menu.menuTreeList().then((res: any) => {
          if (res.data && res.data.length > 0) {
            createTreeData(res.data);
          }
        }).catch((e: any) => {
          console.log(e);
        });
      }
    });
    return {
      treeData,
      selectedValue,
      onChange,
      onSelect
    };
  }
});
