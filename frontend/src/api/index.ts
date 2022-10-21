import Dictionary from './dictionary';
import Video from './video';
import Picture from './picture';
import Task from './task';

// api返回的code
const ResponseCode = {
  Success: '11111',
  Fail: '00000'
};

export * from './common';

export default {
  Video,
  Dictionary,
  Picture,
  Task,
  ResponseCode
};
