import NavSetting from './navSetting';
import ThemeSetting from './themeSetting';
import StatusSetting from './statusSetting';

const SettingItems: any[] = [
  {
    name: 'theme-setting',
    component: ThemeSetting,
    reactiveName: 'currentTheme'
  },
  {
    name: 'nav-setting',
    component: NavSetting,
    reactiveName: 'currentMenuLayout'
  },
  {
    name: 'status-setting',
    component: StatusSetting,
    reactiveName: 'status'
  }
];

export default SettingItems;
