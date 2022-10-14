import appConfig from './app.config';
import root from './app.vue';
import './locales/index.js';
import './mock';
import { createApp, useDirective } from '@lincy-vue/core';
import components from './config/components';
import moment from 'moment';
import 'moment/locale/zh-cn';
import * as Images from './utils/images';
import * as Consts from './model/consts';
import IconComponents from './components/icons';
import States from './state';
import GComponents from './components';
import debounce from '@lincy-vue/core/directives/debounce';
import inputFilter from '@lincy-vue/core/directives/inputFilter';
import Filters from '@/utils/filters';
import Formaters from '@/utils/formaters';

moment.locale('zh-cn');

const options: any = {
  appConfig,
  components: [],
  rootComponent: root
};
const app = createApp(options);
// 按需组件
const comps: any = components;
Object.keys(comps).forEach((name: string) => {
  app.use(comps[name]);
});

// 注册全局的图片引用： $Images.[名称]
app.registerGlobalService('Images', Images);
// 注册常量 $Consts.[名称]
app.registerGlobalService('Consts', Consts);
// 注册全局过滤函数： $Filters.[函数名]
app.registerGlobalService('Filters', Filters);
// 注册全局格式化器： $Formaters.[函数名]
app.registerGlobalService('Formaters', Formaters);

// 注册全局状态:$States.[名称]
const globalStates: any = {};
const states: any = States;
for (const key in states) {
  globalStates[key] = states[key];
}
app.registerGlobalService('States', globalStates);
// 注册全局icon组件
const iconComponents: any = IconComponents;
for (const key in iconComponents) {
  app.component(key, iconComponents[key]);
}
// 注册全局组件
const gComponents: any = GComponents;
Object.keys(gComponents).forEach(name => {
  app.component(name, gComponents[name]);
});

// 框架内部指令
useDirective(debounce);
useDirective(inputFilter);

app.mount('#app');
