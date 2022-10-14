export default class SelectUtil {
  static createRoleSelectOptions (data: any) {
    return data.map((item: any) => {
      return {
        label: item.name,
        value: item.id,
        code: item.code
      };
    });
  }

  static filterOption (value: string, option: any) {
    // eslint-disable-next-line no-mixed-operators
    return option.label.indexOf(value) !== -1 || option.code && option.code.indexOf(value) !== -1;
  }
}
