import { defineComponent, ref, onMounted, watch } from '@lincy-vue/core';
import TreeUtil from '@/utils/tree';

export default defineComponent({
  components: {},
  props: {
    classNames: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: null
    },
    value: {
      type: Object,
      default: null
    },
    // 当前机构id
    currentOrgId: {
      type: String,
      default: ''
    }
  },
  setup (props, context) {
    const { emit } = context;
    const expandedKeys: any = ref([]);
    const treeData: any = ref([]);
    const searchValue: any = ref('');
    const autoExpandParent = ref(true);
    let orgTree: any = null;

    if (props.data && props.data.length) {
      orgTree = TreeUtil.createOrgTree(props.data);
    }

    const onExpand = (keys: string[]) => {
      expandedKeys.value = keys;
      autoExpandParent.value = false;
    };

    const emitModelValue = (node: any) => {
      emit('update:value', node);
    };

    const handleSelectTreeNode = (selectedKeys: string[]) => {
      const node = orgTree.getNode(selectedKeys[0]);
      emitModelValue(node);
    };

    watch(() => props.data, (data) => {
      orgTree = TreeUtil.createOrgTree(data);
      treeData.value = [orgTree.rootNode];
      expandedKeys.value = [orgTree.rootNode.id];
      emitModelValue(orgTree.rootNode);
    });

    watch(() => props.currentOrgId, () => {
      const node = orgTree.getNode(props.currentOrgId);
      emitModelValue(node);
      expandedKeys.value = TreeUtil.getMatchedExpandedNodeIds(orgTree, n => {
        return n.id === node.id;
      });
    });

    watch(searchValue, (val) => {
      const keys = TreeUtil.getMatchedExpandedNodeIds(orgTree, node => {
        return val && node.text.indexOf(val) !== -1;
      });
      if (keys.length > 0) {
        expandedKeys.value = keys;
        autoExpandParent.value = true;
      }
    });

    onMounted(() => {
      if (orgTree) {
        const node = props.currentOrgId ? orgTree.getNode(props.currentOrgId) : orgTree.rootNode;
        emitModelValue(node);
        expandedKeys.value = [node.id];
      }
    });

    return {
      treeData,
      searchValue,
      expandedKeys,
      autoExpandParent,
      handleSelectTreeNode,
      onExpand
    };
  }
});
