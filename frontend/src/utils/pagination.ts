
import { reactive } from '@lincy-vue/core';

export default class PaginationUtil {
  // loadDataFunction为加载数据回调，参数为创建的pagination对象
  static createPagination (loadDataFunction: any) {
    const pagination = reactive({
      current: 1,
      pageSize: 10,
      total: 0,
      onChange: (page: number, pageSize: number) => {
        pagination.current = page;
        pagination.pageSize = pageSize;
        loadDataFunction(pagination);
      },
      onShowSizeChange: (current: number, size: number) => {
        pagination.current = current;
        pagination.pageSize = size;
        loadDataFunction(pagination);
      }
    });
    return pagination;
  }
}
