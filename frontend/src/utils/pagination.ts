
import { reactive } from '@lincy-vue/core';

type PageChange = (page: number, pageSize: number) => void;
type OnPageChange = (pagination: IPagination) => void;

export interface IPagination {
  current: number
  pageSize: number
  total: number
  onChange: PageChange,
  onShowSizeChange: PageChange
}

export default class PaginationUtil {
  // loadDataFunction为加载数据回调，参数为创建的pagination对象
  static createPagination (loadDataFunction: OnPageChange, options:any) {
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
      },
      showTotal: (total: number) => `Total ${total} items`,
      ...options
    });
    return pagination;
  }

  static createListPagination(loadDataFunction: OnPageChange, options:any) {
    return PaginationUtil.createPagination(loadDataFunction, {
      pageSizeOptions: ['24', '48', '96'],
      pageSize: 24,
      ...options,
    })
  }
}
