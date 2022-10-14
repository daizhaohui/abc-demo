/* eslint-disable no-unused-vars */
import { defineComponent, ref } from '@lincy-vue/core';

export default defineComponent({
  components: {
  },
  props: {
    // 输入条件是一个表单
    model: {
      type: Object,
      default: () => {
        return {};
      }
    },
    // 查询条件输入验证规则
    rules: {
      type: Array,
      default: () => {
        return [];
      }
    },
    // 输入条件的总个数
    count: {
      type: Number,
      default: 0
    }
  },
  emits: {
    query: null,
    reset: null
  },
  setup (props, context) {
    const refForm = ref();
    const collapsed = ref(true);
    const rows = Math.ceil(props.count / 3);
    // 最后一行单元格数
    const lastRowCells = 3 - (rows * 3 - props.count);
    const { emit } = context;
    // eslint-disable-next-line vue/no-setup-props-destructure
    const { model, rules, count, ...restProps } = props;
    // a-form一些属性可以传递过来应用在内置的a-form中
    const otherProps = {
      labelCol: { span: 5 },
      ...restProps
    };

    const handleQuery = () => {
      emit('query', refForm);
      console.log('query');
    };

    const handleReset = () => {
      emit('reset', refForm);
      console.log('reset');
    };

    const toggleForm = () => {
      collapsed.value = !collapsed.value;
    };

    // 总行数为1，不显示展开更多； 总行数超过1，根据collapsed状态来展示更多行
    const showRow = (row) => {
      if (rows === 1) {
        return true;
      } else {
        if (collapsed.value) {
          return row === 1;
        }
        return true;
      }
    };

    const showCellSlot = (row, cell) => {
      if (rows === 1) {
        return cell <= lastRowCells;
      } else {
        if (collapsed.value) {
          return row === 1 && cell <= 2;
        } else {
          return row < rows || (row === rows && cell <= lastRowCells);
        }
      }
    };

    const showCellButtons = (row, cell) => {
      if (rows === 1) {
        return cell === lastRowCells + 1;
      } else {
        if (collapsed.value) {
          return row === 1 && cell === 3;
        } else {
          return row === rows && lastRowCells < 3 && cell === lastRowCells + 1;
        }
      }
    };

    // 一行满3个单元格
    const showButtons = () => {
      if (rows === 1) {
        return lastRowCells === 3;
      } else {
        if (collapsed.value) {
          return false;
        } else {
          return lastRowCells === 3;
        }
      }
    };

    return {
      refForm,
      rows,
      lastRowCells,
      collapsed,
      otherProps,
      toggleForm,
      handleQuery,
      handleReset,
      showCellButtons,
      showButtons,
      showCellSlot,
      showRow
    };
  }
});
