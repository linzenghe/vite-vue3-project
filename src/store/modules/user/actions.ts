/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-28 09:18:29
 */
import { ActionTree, ActionContext } from 'vuex'


import { Mutations, UserMutationTypes } from './mutations'
import RootStateTypes from '@/store/interface'
import {useStore} from '@/store'
import { PermissionActionType } from '../permission/actions'

import { UserState,state } from './state'
import { removeToken, setToken } from '@/utils/cookies'
import router, { resetRouter } from '@/router'
import { RouteRecordRaw } from 'vue-router'
// action
export enum UserActionTypes {
  ACTION_LOGIN = 'ACTION_LOGIN',
  ACTION_RESET_TOKEN = 'ACTION_RESET_TOKEN',
  ACTION_GET_USER_INFO = 'ACTION_GET_USER_INFO',
  ACTION_CHANGE_ROLES = 'ACTION_CHANGE_ROLES',
  ACTION_LOGIN_OUT = 'ACTION_LOGIN_OUT',
}


type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1], // Parameters 获取参数类型
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<UserState, RootStateTypes>, 'commit'>


export interface Actions {
  [UserActionTypes.ACTION_LOGIN](
    { commit }: AugmentedActionContext,
    userInfo: { username: string, password: string }
  ): void
  [UserActionTypes.ACTION_RESET_TOKEN](
    { commit }: AugmentedActionContext
  ): void
  [UserActionTypes.ACTION_GET_USER_INFO](
    { commit }: AugmentedActionContext
  ): void
  [UserActionTypes.ACTION_CHANGE_ROLES](
    { commit }: AugmentedActionContext, role: string
  ): void
  [UserActionTypes.ACTION_LOGIN_OUT](
    { commit }: AugmentedActionContext,
  ): void
}

export const actions:ActionTree<UserState,RootStateTypes> & Actions = {
  async [UserActionTypes.ACTION_LOGIN](
    { commit }: AugmentedActionContext,
    userInfo: { username: string, password: string }
  ) {
    let { username, password } = userInfo
    username = username.trim()
    commit(UserMutationTypes.SET_TOKEN, 'accessToken')
    // await loginRequest({ username, password }).then(async(res) => {
    //   if (res?.code === 0 && res.data.accessToken) {
    //     setToken(res.data.accessToken)
    //     commit(UserMutationTypes.SET_TOKEN, res.data.accessToken)
    //   }
    // }).catch((err) => {
    //   console.log(err)
    // })
  },

  [UserActionTypes.ACTION_RESET_TOKEN](
    { commit }: AugmentedActionContext) {
    removeToken()
    commit(UserMutationTypes.SET_TOKEN, '')
    commit(UserMutationTypes.SET_ROLES, [])
  },

  async [UserActionTypes.ACTION_GET_USER_INFO](
    { commit }: AugmentedActionContext
  ) {
    if (state.token === '') {
      throw Error('token is undefined!')
    }
    // await userInfoRequest().then((res) => {
    //   if (res?.code === 0) {
    //     commit(UserMutationTypes.SET_ROLES, res.data.roles)
    //     commit(UserMutationTypes.SET_NAME, res.data.name)
    //     commit(UserMutationTypes.SET_AVATAR, res.data.avatar)
    //     commit(UserMutationTypes.SET_INTRODUCTION, res.data.introduction)
    //     commit(UserMutationTypes.SET_EMAIL, res.data.email)
    //     return res
    //   } else {
    //     throw Error('Verification failed, please Login again.')
    //   }
    // })
  },

  async [UserActionTypes.ACTION_CHANGE_ROLES](
    { commit }: AugmentedActionContext,
    role: string
  ) {
    const token = role + '-token'
    const store = useStore()
    commit(UserMutationTypes.SET_TOKEN, token)
    setToken(token)
    await store.dispatch(UserActionTypes.ACTION_GET_USER_INFO, undefined)
    store.dispatch(PermissionActionType.ACTION_SET_ROUTES, state.roles)
    store.state.permission.dynamicRoutes.forEach((item: RouteRecordRaw) => {
      router.addRoute(item)
    })
  },

  [UserActionTypes.ACTION_LOGIN_OUT](
    { commit }: AugmentedActionContext
  ) {
    console.log(commit)
    removeToken()
    commit(UserMutationTypes.SET_TOKEN, '')
    commit(UserMutationTypes.SET_ROLES, [])
    resetRouter()
  }
}
