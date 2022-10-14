import PageWrapper from './pageWrapper';
import QueryCondition from './QueryCondition';
import BaseTable from './baseTable/';
import Popconfirm from './popconfirm';
import OrgTreeSelect from './orgTreeSelect';
import ListOperationButton from './listOperationButton';
import UserDialogSelect from './userDialogSelect';
import { message, notification } from 'ant-design-vue';

const Message = message;
const Notification = notification;
Message.config({
  duration: 6
});

export {
  Message,
  Notification
};

export default {
  'page-wrapper': PageWrapper,
  'query-condition': QueryCondition,
  'base-table': BaseTable,
  popconfirm: Popconfirm,
  'org-tree-select': OrgTreeSelect,
  'list-operation-button': ListOperationButton,
  'user-dialog-select': UserDialogSelect
};
