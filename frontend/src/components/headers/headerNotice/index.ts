import { defineComponent, ref, reactive, onBeforeMount, useEmitter } from '@lincy-vue/core';
import { HeaderRightContentItems, GlobalEvents } from '@/model/consts';
import GlobalState from '@/state';
import List from './list';
import { Emitter } from '@lincy-vue/core/types';

const emitter: Emitter = useEmitter();

const ExampleNoticeData = {
  tab1: [
    {
      id: '000000001',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: '你收到了 14 份新周报',
      datetime: '2017-08-09'
    },
    {
      id: '000000002',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      datetime: '2017-08-08',
      read: true
    }
  ],
  tab2: [
    {
      id: '000000009',
      title: '任务名称',
      description: '任务需要在 2017-01-12 20:00 前启动',
      extra: '未开始',
      status: 'todo'
    },
    {
      id: '000000010',
      title: '第三方紧急代码变更',
      description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
      extra: '马上到期',
      read: true,
      status: 'urgent'
    },
    {
      id: '000000011',
      title: '信息安全考试',
      description: '指派竹尔于 2017-01-09 前完成更新并发布',
      extra: '已耗时 8 天',
      status: 'doing'
    },
    {
      id: '000000012',
      title: 'ABCD 版本发布',
      description: '冠霖提交于 2017-01-06，需在 2017-01-07 前完成代码变更任务',
      extra: '进行中',
      status: 'processing'
    }
  ],
  tab3: []
};

const TabTitleTemplates: any = {
  tab1: '通知',
  tab2: '消息',
  tab3: '待办'
};

export default defineComponent({
  components: {
    List
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    count: {
      type: Number,
      default: 0
    },
    theme: {
      type: String,
      default: ''
    }
  },
  setup (props, context) {
    const activeKey = ref('1');
    const tabTitles: any = reactive({
      tab1: TabTitleTemplates.tab1,
      tab2: TabTitleTemplates.tab2,
      tab3: TabTitleTemplates.tab3
    });
    const noticeData: any = reactive({
      tab1: ExampleNoticeData.tab1,
      tab2: ExampleNoticeData.tab2,
      tab3: ExampleNoticeData.tab3
    });

    const { emit } = context;

    const handleClear = (e: any) => {
      emitter.emit(GlobalEvents.OnHeaderRightContentItemClick, {
        target: HeaderRightContentItems.Notice,
        args: {
          type: 'clear',
          data: e.item
        }
      });
    };

    const handleTabChange = (key: string) => {
      emit('tabChange', key);
      activeKey.value = key;
    };

    const handlePopupVisibleChange = (e: any) => {
      emit('popupVisibleChange', e);
    };

    const handleItemClick = (e: any) => {
      emitter.emit(GlobalEvents.OnHeaderRightContentItemClick, {
        target: HeaderRightContentItems.Notice,
        args: {
          type: e.type,
          data: e.item
        }
      });
    };

    const handleNoticeClick = () => {
      emitter.emit(GlobalEvents.OnHeaderRightContentItemClick, {
        target: HeaderRightContentItems.Notice,
        args: null
      });
    };

    const updateTabsTitle = (names: string[]) => {
      const update: any = (name: string) => {
        if (noticeData[name] && noticeData[name].length > 0) {
          tabTitles[name] = `${TabTitleTemplates[name]}(${noticeData[name].length})`;
        } else {
          tabTitles[name] = TabTitleTemplates[name];
        }
      };
      names ? update(names) : ['tab1', 'tab2', 'tab3'].forEach(n => update(n));
    };

    onBeforeMount(() => {
      updateTabsTitle([]);
      GlobalState.Notice.count = 10;
    });

    return {
      tabTitles,
      activeKey,
      noticeData,
      handleNoticeClick,
      handleClear,
      handleTabChange,
      handlePopupVisibleChange,
      handleItemClick
    };
  }
});
