import { formatMoney } from '@lincy-js/utils/number';
import moment from 'moment';

export default {
  money (num: number, decimal = 2) {
    return formatMoney(num, decimal, '¥');
  },
  dateToMinute (d: number|string) {
    return moment(d).format('YYYY-MM-DD HH:mm');
  }
};
