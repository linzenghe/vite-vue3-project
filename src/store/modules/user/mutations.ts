/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-28 09:18:29
 */

import { MutationTree } from 'vuex'
import { UserState } from './state'

export enum UserMutationTypes {
  SET_TOKEN = 'SET_TOKEN',
  SET_NAME = 'SET_NAME',
  SET_AVATAR = 'SET_AVATAR',
  SET_INTRODUCTION = 'SET_INTRODUCTION',
  SET_ROLES = 'SET_ROLES',
  SET_EMAIL = 'SET_EMAIL',
}


export type Mutations<S = UserState> = {
  [UserMutationTypes.SET_TOKEN](state: S, token: string): void
  [UserMutationTypes.SET_NAME](state: S, name: string): void
  [UserMutationTypes.SET_AVATAR](state: S, avatar: string): void
  [UserMutationTypes.SET_INTRODUCTION](state: S, introduction: string): void
  [UserMutationTypes.SET_ROLES](state: S, roles: string[]): void
  [UserMutationTypes.SET_EMAIL](state: S, email: string): void
}

export const mutations:MutationTree<UserState> & Mutations = {
  [UserMutationTypes.SET_TOKEN](state: UserState, token: string) {
    state.token = token
  },

  [UserMutationTypes.SET_NAME](state: UserState, name: string) {
    state.name = name
  },

  [UserMutationTypes.SET_AVATAR](state: UserState, avatar: string) {
    state.avatar = avatar
  },

  [UserMutationTypes.SET_INTRODUCTION](state: UserState, introduction: string) {
    state.introduction = introduction
  },

  [UserMutationTypes.SET_ROLES](state: UserState, roles: string[]) {
    state.roles = roles
  },

  [UserMutationTypes.SET_EMAIL](state: UserState, email: string) {
    state.email = email
  }
}

