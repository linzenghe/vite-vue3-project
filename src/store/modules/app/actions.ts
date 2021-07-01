/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-28 09:18:29
 */
import { ActionTree, ActionContext } from 'vuex'


import { Mutations, AppMutationTypes } from './mutations'
import RootStateTypes from '@/store/interface'
import { AppState ,DeviceType} from './state'

// action
export enum AppActionTypes {
  ACTION_TOGGLE_SIDEBAR = 'ACTION_TOGGLE_SIDEBAR',
  ACTION_CLOSE_SIDEBAR = 'ACTION_CLOSE_SIDEBAR',
  ACTION_TOGGLE_DEVICE = 'ACTION_TOGGLE_DEVICE',
  ACTION_SET_LANGUAGE = 'ACTION_SET_LANGUAGE',
  ACTION_SET_SIZE = 'ACTION_SET_SIZE',
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<AppState, RootStateTypes>, 'commit'>

export interface Actions {
  [AppActionTypes.ACTION_TOGGLE_SIDEBAR](
    { commit }: AugmentedActionContext,
    withoutAnimation: boolean
  ): void
  [AppActionTypes.ACTION_CLOSE_SIDEBAR](
    { commit }: AugmentedActionContext,
    withoutAnimation: boolean
  ): void
  [AppActionTypes.ACTION_TOGGLE_DEVICE](
    { commit }: AugmentedActionContext,
    device: DeviceType
  ): void
  [AppActionTypes.ACTION_SET_SIZE](
    { commit }: AugmentedActionContext,
    size: string
  ): void
}

export const actions:ActionTree<AppState,RootStateTypes> & Actions = {
  [AppActionTypes.ACTION_TOGGLE_SIDEBAR]({ commit }, withoutAnimation: boolean) {
    commit(AppMutationTypes.TOGGLE_SIDEBAR, withoutAnimation)
  },
  [AppActionTypes.ACTION_CLOSE_SIDEBAR]({ commit }, withoutAnimation: boolean) {
    commit(AppMutationTypes.CLOSE_SIDEBAR, withoutAnimation)
  },
  [AppActionTypes.ACTION_TOGGLE_DEVICE]({ commit }, device: DeviceType) {
    commit(AppMutationTypes.TOGGLE_DEVICE, device)
  },
  [AppActionTypes.ACTION_SET_SIZE]({ commit }, size: string) {
    commit(AppMutationTypes.SET_SIZE, size)
  }
}
