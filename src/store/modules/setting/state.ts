/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-04 10:52:47
 */
import elementVariables from '@/styles/element-variables.module.scss' // 不支持预编译
import settingConfig from '@/config/setting'
export interface SettingsState{
  theme: string,
  fixedHeader: boolean,
  showSettings: boolean,
  tagsView: boolean,
  sidebarLogo: boolean,
}

export const state:SettingsState = {
  theme: elementVariables.theme,
  fixedHeader: settingConfig.fixedHeader,
  showSettings: settingConfig.showSettings,
  tagsView: settingConfig.tagsView,
  sidebarLogo: settingConfig.sidebarLogo
}
