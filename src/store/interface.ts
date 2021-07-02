/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-04 09:53:00
 */
import { UserState } from '@/store/modules/user/state' // 用户模块 state 类型引入
import { SettingsState } from '@/store/modules/setting/state'
import { TagsViewState } from '@/store/modules/tags-view/state'
import { AppState } from '@/store/modules/app/state'
import { PermissionState } from '@/store/modules/permission/state'
// root 层state 类型定义
export default interface RootStateTypes{

}

// vuex所有state 类型定义集成
export interface AllStateTypes extends RootStateTypes{
  user: UserState,
  settings: SettingsState,
  tagsView: TagsViewState,
  app: AppState,
  permission: PermissionState
}




