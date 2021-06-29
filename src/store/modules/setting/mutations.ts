/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-28 09:18:29
 */

import { MutationTree } from 'vuex'
import { SettingsState } from './state'

export enum SettingsMutationTypes {
  CHANGE_SETTING = 'CHANGE_SETTING', // 设置参数
}


export type Mutations<S = SettingsState> = {
  [SettingsMutationTypes.CHANGE_SETTING](state: S, payload: { key: string, value: any }): void
}

export const mutations:MutationTree<SettingsState> & Mutations = {
  [SettingsMutationTypes.CHANGE_SETTING](state:SettingsState,payload: { key:string, value:any}){
    const {key,value} = payload
    if(state.hasOwnProperty(key)){
      state[key] = value
    }
  }
}

