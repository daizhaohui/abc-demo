import PageWrapper from './pageWrapper';
import QueryCondition from './QueryCondition';
import BaseTable from './baseTable/';
import Popconfirm from './popconfirm';
import ListOperationButton from './listOperationButton';
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
  'list-operation-button': ListOperationButton
};
