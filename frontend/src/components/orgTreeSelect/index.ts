import { defineComponent, ref, watch, onMounted } from '@lincy-vue/core';
import Api from '@/api';
import { ApiCode } from '@/model/consts';
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
    // 支持多选
    multiple: {
      type: Boolean,
      default: false
    },
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
    let orgTree: any = {};

    const createTreeData = (data: any) => {
      orgTree = TreeUtil.createOrgTree(data);
      treeData.value = [orgTree.rootNode];
      if (props.value) {
        if (props.nodeValue && orgTree) {
          emit('update:nodeValue', TreeUtil.getNodes(orgTree, typeof props.value === 'string' ? [props.value] : props.value));
        }
        selectedValue.value = props.value;
      }
    };

    watch(() => props.value, (val) => {
      selectedValue.value = val;
    });

    watch(() => selectedValue.value, (val) => {
      if (props.nodeValue && orgTree) {
        if (val) {
          const nodes = TreeUtil.getNodes(orgTree, typeof val === 'string' ? [val] : val);
          emit('update:nodeValue', nodes);
        } else {
          emit('update:nodeValue', []);
        }
      }
    });

    watch(() => props.data, (val) => {
      if (!props.autoLoadData) {
        createTreeData(val);
      }
    });

    const onChange = (value: any, label: any, extra: any) => {
      emit('update:value', value || '');
      emit('change', value, label, extra);
    };

    const onSelect = (value: any, node: any, extra: any) => {
      emit('change', value, node, extra);
    };

    onMounted(() => {
      if (props.autoLoadData) {
        Api.Org.getTree().then((res: any) => {
          const { data, code } = res.data;
          if (data && code === ApiCode.Success && data.length > 0) {
            createTreeData(data);
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
