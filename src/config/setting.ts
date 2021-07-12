/*
 * @Dsc: 配置默认设置文件
 * @Author: zenghe
 * @Date: 2021-06-28 15:38:41
 */
interface SettingConfig{
  title: string,
  showSettings: boolean,
  sidebarLogo: boolean,
  fixedHeader: boolean,
  tagsView: boolean,
}

const settingConfig:SettingConfig = {
  title: 'VITE ELEMENT ADMIN',
  showSettings: true,
  sidebarLogo: true,
  fixedHeader: true,
  tagsView: true,
}

export default settingConfig
