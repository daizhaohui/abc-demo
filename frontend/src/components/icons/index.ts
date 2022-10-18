// import {
//   UserOutlined, LockOutlined, KeyOutlined, PhoneOutlined, CopyrightCircleOutlined, MenuFoldOutlined, MenuUnfoldOutlined, QuestionCircleOutlined, BellOutlined, MoreOutlined
//   , SettingOutlined, LogoutOutlined, CloseCircleOutlined, EllipsisOutlined, CheckOutlined, DashboardOutlined, DownOutlined, UpOutlined, PlusOutlined
//   , EditOutlined, DeleteOutlined, ArrowLeftOutlined, SmileOutlined, UnorderedListOutlined, SearchOutlined, SaveOutlined, UsergroupAddOutlined, ClearOutlined
//   , PlusSquareOutlined, MinusSquareOutlined, FileDoneOutlined, FullscreenOutlined, FullscreenExitOutlined, CloseOutlined, FileOutlined, LeftOutlined, RightOutlined
//   , ReloadOutlined, DeleteRowOutlined, CloseSquareOutlined, GlobalOutlined, InfoCircleOutlined, CaretUpOutlined, CaretDownOutlined
// } from '@ant-design/icons-vue';

import UserOutlined from '@ant-design/icons-vue/UserOutlined';
import LockOutlined from '@ant-design/icons-vue/LockOutlined';
import KeyOutlined from '@ant-design/icons-vue/KeyOutlined';
import PhoneOutlined from '@ant-design/icons-vue/PhoneOutlined';
import CopyrightCircleOutlined from '@ant-design/icons-vue/CopyrightCircleOutlined';
import MenuFoldOutlined from '@ant-design/icons-vue/MenuFoldOutlined';
import MenuUnfoldOutlined from '@ant-design/icons-vue/MenuUnfoldOutlined';
import QuestionCircleOutlined from '@ant-design/icons-vue/QuestionCircleOutlined';
import BellOutlined from '@ant-design/icons-vue/BellOutlined';
import MoreOutlined from '@ant-design/icons-vue/MoreOutlined';
import SettingOutlined from '@ant-design/icons-vue/SettingOutlined';
import LogoutOutlined from '@ant-design/icons-vue/LogoutOutlined';
import CloseCircleOutlined from '@ant-design/icons-vue/CloseCircleOutlined';
import EllipsisOutlined from '@ant-design/icons-vue/EllipsisOutlined';
import CheckOutlined from '@ant-design/icons-vue/CheckOutlined';
import DashboardOutlined from '@ant-design/icons-vue/DashboardOutlined';
import DownOutlined from '@ant-design/icons-vue/DownOutlined';
import UpOutlined from '@ant-design/icons-vue/UpOutlined';
import PlusOutlined from '@ant-design/icons-vue/PlusOutlined';
import EditOutlined from '@ant-design/icons-vue/EditOutlined';
import DeleteOutlined from '@ant-design/icons-vue/DeleteOutlined';
import ArrowLeftOutlined from '@ant-design/icons-vue/ArrowLeftOutlined';
import SmileOutlined from '@ant-design/icons-vue/SmileOutlined';
import UnorderedListOutlined from '@ant-design/icons-vue/UnorderedListOutlined';
import SearchOutlined from '@ant-design/icons-vue/SearchOutlined';
import SaveOutlined from '@ant-design/icons-vue/SaveOutlined';
import UsergroupAddOutlined from '@ant-design/icons-vue/UsergroupAddOutlined';
import ClearOutlined from '@ant-design/icons-vue/ClearOutlined';
import PlusSquareOutlined from '@ant-design/icons-vue/PlusSquareOutlined';
import MinusSquareOutlined from '@ant-design/icons-vue/MinusSquareOutlined';
import FileDoneOutlined from '@ant-design/icons-vue/FileDoneOutlined';
import FullscreenOutlined from '@ant-design/icons-vue/FullscreenOutlined';
import FullscreenExitOutlined from '@ant-design/icons-vue/FullscreenExitOutlined';
import CloseOutlined from '@ant-design/icons-vue/CloseOutlined';
import FileOutlined from '@ant-design/icons-vue/FileOutlined';
import LeftOutlined from '@ant-design/icons-vue/LeftOutlined';
import RightOutlined from '@ant-design/icons-vue/RightOutlined';
import ReloadOutlined from '@ant-design/icons-vue/ReloadOutlined';
import DeleteRowOutlined from '@ant-design/icons-vue/DeleteRowOutlined';
import CloseSquareOutlined from '@ant-design/icons-vue/CloseSquareOutlined';
import GlobalOutlined from '@ant-design/icons-vue/GlobalOutlined';
import InfoCircleOutlined from '@ant-design/icons-vue/InfoCircleOutlined';
import CaretUpOutlined from '@ant-design/icons-vue/CaretUpOutlined';
import CaretDownOutlined from '@ant-design/icons-vue/CaretDownOutlined';

// 命名前缀统一为icon-
const IconComponents = {
  // 用户
  'icon-user': UserOutlined,
  // 密码
  'icon-lock': LockOutlined,
  // 验证码
  'icon-key': KeyOutlined,
  // mobile
  'icon-phone': PhoneOutlined,
  // copyright
  'icon-copyright-circle': CopyrightCircleOutlined,
  // 菜单折叠
  'icon-menu-fold': MenuFoldOutlined,
  // 菜单展开
  'icon-menu-unfold': MenuUnfoldOutlined,
  // 帮助 ？
  'icon-question-circle': QuestionCircleOutlined,
  // 警示，消息提示
  'icon-bell': BellOutlined,
  // 更多
  'icon-more': MoreOutlined,
  // 设置
  'icon-setting': SettingOutlined,
  // 登出
  'icon-logout': LogoutOutlined,
  // 关闭（圆）,触发报错
  'icon-close-circle': CloseCircleOutlined,
  // 关闭
  'icon-close': CloseOutlined,
  // 省略 ...
  'icon-ellipsis': EllipsisOutlined,
  // 选中打勾
  'icon-check': CheckOutlined,
  // 仪表盘
  'icon-dashboard': DashboardOutlined,
  // 向上箭头
  'icon-up': UpOutlined,
  // 向下箭头
  'icon-down': DownOutlined,
  // 添加
  'icon-plus': PlusOutlined,
  // 编辑
  'icon-edit': EditOutlined,
  // 删除
  'icon-delete': DeleteOutlined,
  // 左箭头（返回）
  'icon-arrow-left': ArrowLeftOutlined,
  // 左箭头
  'icon-left': LeftOutlined,
  // 左箭头
  'icon-right': RightOutlined,
  // 笑脸
  'icon-smile': SmileOutlined,
  // 详情
  'icon-unordered-list': UnorderedListOutlined,
  // 搜索
  'icon-search': SearchOutlined,
  // 保存
  'icon-save': SaveOutlined,
  // 用户组 （角色）
  'icon-user-group-add': UsergroupAddOutlined,
  // 清除 （重置查询条件)
  'icon-clear': ClearOutlined,
  // 展开 +
  'icon-plus-square': PlusSquareOutlined,
  // 折叠 -
  'icon-minus-square': MinusSquareOutlined,
  // 提交
  'icon-file-done': FileDoneOutlined,
  // 全屏
  'icon-fullscreen': FullscreenOutlined,
  // 非全屏
  'icon-fullscreen-exit': FullscreenExitOutlined,
  // 文件（页面)
  'icon-file': FileOutlined,
  // 选中
  'icon-checkout': CheckOutlined,
  // 刷新，重新加载
  'icon-reload': ReloadOutlined,
  // 删除行
  'icon-delete-row': DeleteRowOutlined,
  // 关闭
  'icon-close_square': CloseSquareOutlined,
  // 全球
  'icon-global': GlobalOutlined,
  'icon-info-circle': InfoCircleOutlined,
  'icon-caret-up': CaretUpOutlined,
  'icon-caret-down': CaretDownOutlined,
};

// icons进行统一管理
export default IconComponents;
