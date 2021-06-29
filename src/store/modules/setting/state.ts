/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-04 10:52:47
 */
import variables from '@/assets/styles/element-variables.scss'
import settingConfig from '@/config/setting'

export interface SettingsState{
  theme: string,
  fixedHeader: boolean,
  showSettings: boolean,
  tagsView: boolean,
  sidebarLogo: boolean
}

export const state:SettingsState = {
  theme: variables.theme,
  fixedHeader: settingConfig.fixedHeader,
  showSettings: settingConfig.showSettings,
  tagsView: settingConfig.tagsView,
  sidebarLogo: settingConfig.sidebarLogo
}
