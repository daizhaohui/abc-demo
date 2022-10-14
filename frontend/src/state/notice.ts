import { Module, Observable } from '@lincy-vue/core/state';

@Module('notice')
export default class NoticeState {
  // 新的消息通知数量
  @Observable(0)
  static count: number;

  // 显示loading提示
  @Observable(false)
  static spinning: boolean;
}
