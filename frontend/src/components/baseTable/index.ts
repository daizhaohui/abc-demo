import { defineComponent, reactive, watch } from '@lincy-vue/core';

export default defineComponent({
  components: {
  },
  props: {
    showFooter: {
      type: Boolean,
      default: false
    },
    pagination: {
      type: Object,
      default: null
    }
  },

  // :show-quick-jumper="true"
  // :show-size-changer="true"
  // :page-size-options="['10', '20', '30', '40','50']"
  // :show-total="total=>`共${total}条`"
  // :default-page-size="10"
  setup (props, context) {
    const { attrs } = context;
    const slotNames: string[] = [];
    const tablePagination: any = !props.pagination
      ? false
      : reactive({
        pageSizeOptions: ['10', '20', '30', '40', '50'],
        showQuickJumper: true,
        showSizeChanger: true,
        showTotal: (total: number) => `共${total}条`,
        defaultPageSize: 10,
        ...props.pagination
      });
    const newProps: any = {
      ...attrs,
      size: 'small',
      scroll: { y: '466px' },
      ...props,
      bordered: true
    };
    (newProps.columns || []).forEach((c: any) => {
      if (c.slots) {
        Object.keys(c.slots).forEach(key => {
          slotNames.push(c.slots[key]);
        });
      }
    });

    watch(props.pagination, (value) => {
      tablePagination.total = value.total;
      tablePagination.current = value.current;
      tablePagination.pageSize = value.pageSize;
    });

    return {
      newProps,
      slotNames,
      tablePagination
    };
  }
});
