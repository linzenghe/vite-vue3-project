/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-28 09:18:29
 */
import { ActionTree, ActionContext } from 'vuex'


import { Mutations, SettingsMutationTypes } from './mutations'
import RootStateTypes from '@/store/interface'
import { SettingsState } from './state'


// action
export enum SettingsActionTypes {
  ACTION_CHANGE_SETTING = 'ACTION_CHANGE_SETTING',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1], // Parameters 获取参数类型
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<SettingsState, RootStateTypes>, 'commit'>


export interface Actions {
  [SettingsActionTypes.ACTION_CHANGE_SETTING](
    { commit }: AugmentedActionContext,
    payload: {key: string, value: any}
  ): void
}

export const actions:ActionTree<SettingsState,RootStateTypes> & Actions = {
  [SettingsActionTypes.ACTION_CHANGE_SETTING](
    {commit}:AugmentedActionContext,
    payload:{key:string,value:any}
  ){
    commit(SettingsMutationTypes.CHANGE_SETTING, payload)
  }
}
