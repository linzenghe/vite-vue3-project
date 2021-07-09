/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-04 10:52:47
 */
import elementVariables from '@/styles/element-variables.module.scss' // module.scss ,必须为此命名
import settingConfig from '@/config/setting'
export interface SettingsState{
  theme: string,
  fixedHeader: boolean,
  showSettings: boolean,
  tagsView: boolean,
  sidebarLogo: boolean,
}

export const state:SettingsState = {
  theme: elementVariables.theme || '#1890ff',
  fixedHeader: settingConfig.fixedHeader,
  showSettings: settingConfig.showSettings,
  tagsView: settingConfig.tagsView,
  sidebarLogo: settingConfig.sidebarLogo
}
