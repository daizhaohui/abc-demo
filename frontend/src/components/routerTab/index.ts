import { defineComponent, ref, useRouter, onMounted, onUnmounted, reactive, inject, useEmitter, nextTick, watch, onUpdated } from '@lincy-vue/core';
import { GlobalEvents } from '@/model/consts';
import TabItem from './tabItem';
import ContextMenu from './contextMenu';
import LocalStorage from '@lincy-vue/core/state/localStorage';
import { Emitter, IRouteLocationNormalized, IRouterService } from '@lincy-vue/core/types';

export default defineComponent({
  components: {
    TabItem,
    ContextMenu
  },
  props: {
    // 最大的缓存数量
    maxCacheItems: {
      type: Number,
      default: 999
    },
    // 布局： siderMenu（侧边菜单）, topMenu(顶部菜单)
    menuLayout: {
      type: String,
      default: ''
    },
    pageLayout: {
      type: String,
      default: ''
    },
    // 顶部菜单头最大宽度
    maxTopMenuHeaderWidth: {
      type: Number,
      default: 1280
    },
    // 自否自动保存状态
    autoSaveState: {
      type: Boolean,
      default: true
    }
  },
  emits: {},
  setup (props) {
    const router: IRouterService = useRouter();
    const aliveKeeper = ref();
    const refPageHeader = ref();
    const refTabItems = ref();
    const data: any = reactive({
      tabItems: [],
      currentIndex: 0,
      rightClickIndex: -1,
      disabledButtons: {
        close: false,
        refresh: false,
        closeOthers: false,
        closeToRight: false,
        closeAll: false
      }
    });
    let hookHandler: any = null;
    const tabStyle = ref('');
    const scrollTabStyle = ref('');
    const setPageHeaderRef: any = inject('setPageHeaderRef');
    const getContentWidth: any = inject('getContentWidth');
    const showTabArrow = ref(false);
    const arrowLeftDisabled = ref(false);
    const arrowRightDisabled = ref(false);
    const emitter: Emitter = useEmitter();

    // 删除指定索引值的tabItem
    const closeByIndexRange = (rangeFunc: (i: any) => boolean, activedName?: string) => {
      // 获取当前激活的tabItem的key
      const currentName = data.tabItems[data.currentIndex].name;
      const newItems: any = [];
      let i;
      const len = data.tabItems.length;
      let item: any;
      for (i = 0; i < len; i++) {
        item = data.tabItems[i];
        // 设置不能关闭的tabItem保留
        if (item.closable === false || !rangeFunc(i)) {
          newItems.push(item);
        }
      }
      data.tabItems = newItems;
      let index = indexOfTabItemByName(currentName);
      // 如果激活的tabItem没有被删除
      if (index !== -1) {
        data.currentIndex = index;
      } else {
        if (activedName) {
          index = indexOfTabItemByName(activedName);
        } else {
          index = data.tabItems.length ? 0 : -1;
        }
        if (index !== -1) {
          router.replace(data.tabItems[index].to);
        }
      }
    };

    const indexOfTabItem = (func: any) => {
      let i;
      const len = data.tabItems.length;
      for (i = 0; i < len; i++) {
        if (func(data.tabItems[i])) {
          return i;
        }
      }
      return -1;
    };

    const indexOfTabItemByName = (name: string) => {
      return indexOfTabItem((item: any) => {
        return item.name === name;
      });
    };

    // 默认路由名称作为key值（组件缓存的key值）,请设置meta.key值替换默认值
    const getKey = (to: IRouteLocationNormalized): string => {
      return to.fullPath;
    };

    const getName = (to: IRouteLocationNormalized) => {
      return to.name;
    };

    const removeKeepAliveCache = (key: string) => {
      // https://github.com/vuejs/vue-next/issues/2077
      const cache = aliveKeeper.value ? aliveKeeper.value.$.__v_cache : {};
      if (cache) {
        const vnode = cache.get ? cache.get(key) : cache[key];
        if (vnode) {
          if (cache.delete) {
            cache.delete(key);
          } else {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete cache[key];
          }
        }
      }
    };

    const reComputeStyle = () => {
      const width = getContentWidth();
      tabStyle.value = `max-width:${width}px;width:${width}px;`;
      scrollTabStyle.value = `max-width:${width - 60}px;width:${width - 60}px;`;
    };

    const reComputeScrollButtonsVisibleDisabled = () => {
      const width = getContentWidth();
      showTabArrow.value = refTabItems.value.scrollWidth > width - 60;
      if (showTabArrow.value) {
        arrowLeftDisabled.value = refTabItems.value.scrollLeft <= 0;
        arrowRightDisabled.value = refTabItems.value.scrollLeft >= refTabItems.value.scrollWidth - width;
      }
    };

    // 保存状态
    const saveState = () => {
      if (props.autoSaveState) {
        const state = {
          tabItems: data.tabItems,
          currentIndex: data.currentIndex
        };
        LocalStorage.set('__routerTab__', JSON.stringify(state));
      }
    };

    // 恢复状态
    const restoreState = () => {
      if (props.autoSaveState) {
        try {
          const state = JSON.parse(LocalStorage.get('__routerTab__'));
          if (state.currentIndex >= 0 && state.tabItems.length) {
            const routeInfo: any = {
              name: state.tabItems[state.currentIndex].name
            };
            state.tabItems[state.currentIndex].to.params && (routeInfo.params = state.tabItems[state.currentIndex].to.params);
            state.tabItems[state.currentIndex].to.query && (routeInfo.query = state.tabItems[state.currentIndex].to.query);
            data.tabItems = state.tabItems.map((item: any) => {
              const routeConfig = router.getRouteConfig(item.name);
              return {
                ...item,
                ...routeConfig?.meta,
                closable: routeConfig?.meta.closable !== false
              };
            });
            data.currentIndex = state.currentIndex;
            nextTick(() => {
              router.push(routeInfo);
            });
          }
        } catch (ex) {
          console.log(ex);
        }
      }
    };

    const onTabItemRightClick = (index: number, e: any) => {
      e.preventDefault();
      const tabItem = data.tabItems[index];
      data.rightClickIndex = index;
      data.disabledButtons.refresh = index !== data.currentIndex;
      data.disabledButtons.close = tabItem.closable === false;
    };

    const onTabItemLeftClick = (index: number) => {
      data.currentIndex = index;
      saveState();
    };

    const onContextMenuClose = () => {
      data.rightClickIndex = -1;
    };

    const onTabItemClose = (index: number) => {
      const currentName = data.tabItems[data.currentIndex].name;
      if (data.tabItems[index].closable !== false) {
        data.tabItems.splice(index, 1);
        const curIndex = indexOfTabItemByName(currentName);
        if (curIndex !== -1) {
          data.currentIndex = curIndex;
        } else {
          if (data.tabItems.length) {
            data.currentIndex = 0;
            router.replace(data.tabItems[data.currentIndex].to);
          }
        }
      }
    };

    const onContextMenuItemClick = (action: string) => {
      switch (action) {
        case 'refresh':
          if (data.rightClickIndex !== -1) {
            const tabItem = data.tabItems[data.rightClickIndex];
            const key = getKey(tabItem.to);
            removeKeepAliveCache(key);
            tabItem.to = {
              ...tabItem.to,
              query: {
                ...tabItem.to.query,
                _rt_: Date.now()
              }
            };
            data.currentIndex = data.rightClickIndex;
            router.replace(tabItem.to);
          }
          break;
        case 'close':
          if (data.rightClickIndex !== -1) {
            onTabItemClose(data.rightClickIndex);
          }
          break;
        case 'closeOthers':
          if (data.rightClickIndex !== -1) {
            const clickName = data.tabItems[data.rightClickIndex].name;
            closeByIndexRange(i => i !== data.rightClickIndex, clickName);
          }
          break;
        case 'closeToRight':
          if (data.rightClickIndex !== -1) {
            closeByIndexRange(i => i > data.rightClickIndex);
          }
          break;
        case 'closeAll':
          if (data.rightClickIndex !== -1) {
            closeByIndexRange(i => i >= 0 && i < data.tabItems.length);
          }
          break;
        default:
          break;
      }
      data.rightClickIndex = -1;
      saveState();
    };

    const onArrowLeft = () => {
      let left = refTabItems.value.scrollLeft;
      left = left - 100 > 0 ? left - 100 : 0;
      refTabItems.value.scrollTo(left, 0);
      reComputeScrollButtonsVisibleDisabled();
    };
    const onArrowRight = () => {
      let left = refTabItems.value.scrollLeft;
      left = left + 100 < refTabItems.value.scrollWidth ? left + 100 : refTabItems.value.scrollWidth;
      refTabItems.value.scrollTo(left, 0);
      reComputeScrollButtonsVisibleDisabled();
    };

    onUpdated(() => {
      reComputeScrollButtonsVisibleDisabled();
    });

    watch(() => props.menuLayout, () => {
      nextTick(() => {
        reComputeStyle();
      });
    });

    watch(() => props.pageLayout, () => {
      nextTick(() => {
        reComputeStyle();
      });
    });

    watch(() => props.maxTopMenuHeaderWidth, () => {
      nextTick(() => {
        reComputeStyle();
      });
    });

    const onWindowSizeChange = () => {
      reComputeStyle();
      reComputeScrollButtonsVisibleDisabled();
    };

    const onDocumentLoaded = () => {
      reComputeScrollButtonsVisibleDisabled();
    };

    onMounted(() => {
      emitter.on(GlobalEvents.OnWindowSizeChange, onWindowSizeChange);
      emitter.on(GlobalEvents.OnDocumentLoaded, onDocumentLoaded);

      // 执行路由前，在插件router.js中的beforeEach后执行。to为跳转的路由信息，from为从那个路由跳转
      hookHandler = router.beforeEachHook((to: IRouteLocationNormalized, from: IRouteLocationNormalized) => {
      // 固定放到第一个tab位置
        const parentRouteConfig = router.getParentRouteConfig(to.name);
        // 父路由不是main直接返回
        if (!parentRouteConfig || parentRouteConfig.name !== 'main') return;

        const tabIndex = to.meta && to.meta.tabIndex ? to.meta.tabIndex : -1;
        const fromName = getName(from);
        const fromIndex = indexOfTabItemByName(fromName);
        // 根据query中的tab设置来判断是否关闭from，是否刷新to
        const tab = to.query && to.query.$tab ? JSON.parse(decodeURIComponent(to.query.$tab)) : null;
        if (fromIndex !== -1 && tab && tab.close === true) {
          data.tabItems.splice(fromIndex, 1);
        }
        const toName = getName(to);
        const toKey = getKey(to);
        const toIndex = indexOfTabItemByName(toName);
        if (toIndex === -1) {
        // 删除tab设置（tab设置刷新、关闭from等是一次有效）
          const query: any = {};
          to.query && Object.keys(to.query).forEach(k => {
            k !== 'tab' && (query[k] = to.query[k]);
          });
          // 新增，删除之前的缓存.
          removeKeepAliveCache(toKey);
          const tabItem = {
            key: toKey,
            name: to.name,
            path: to.path,
            to: {
              name: to.name,
              path: to.path,
              params: to.params,
              query,
              meta: to.meta || {}
            },
            title: to.meta.title,
            icon: to.meta.icon || '',
            closable: to.meta.closable !== false
          };
          if (tabIndex > 0) {
            data.tabItems.splice(tabIndex - 1, 0, tabItem);
            data.currentIndex = tabIndex;
          } else {
            data.tabItems.push(tabItem);
            data.currentIndex = data.tabItems.length - 1;
          }
        } else {
        // 跳转指定要刷新
          if (tab && tab.refresh) {
            removeKeepAliveCache(toKey);
          }
          data.currentIndex = toIndex;
        }
        // 保存状态
        saveState();
      });

      // 告诉父容器，tab头的高度
      setPageHeaderRef(refPageHeader.value);
      restoreState();
      nextTick(() => {
        reComputeStyle();
        reComputeScrollButtonsVisibleDisabled();
      });
    });

    onUnmounted(() => {
      router.offHook(hookHandler);
      emitter.off(GlobalEvents.OnWindowSizeChange, onWindowSizeChange);
      emitter.off(GlobalEvents.OnDocumentLoaded, onDocumentLoaded);
    });

    return {
      data,
      aliveKeeper,
      refPageHeader,
      tabStyle,
      refTabItems,
      showTabArrow,
      arrowLeftDisabled,
      arrowRightDisabled,
      scrollTabStyle,
      onArrowLeft,
      onArrowRight,
      onTabItemRightClick,
      onContextMenuItemClick,
      onTabItemLeftClick,
      onTabItemClose,
      onContextMenuClose,
      getKey
    };
  }
});
