/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-04 09:53:00
 */
import UserModuleTypes from '@/store/modules/user/interface' // 用户模块 state 类型引入
import { SettingsState } from '@/store/modules/setting/state'
// root 层state 类型定义
export default interface RootStateTypes{

}

// vuex所有state 类型定义集成
export interface AllStateTypes extends RootStateTypes{
  user: UserModuleTypes,
  settings: SettingsState
}




