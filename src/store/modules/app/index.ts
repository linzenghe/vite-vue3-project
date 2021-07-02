/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-04 10:52:39
 */

import { Module } from 'vuex'

import RootStateTypes from '@/store/interface'
import { mutations } from './mutations'
import { actions } from './actions'

import {AppState, state} from './state'


const appModule:Module<AppState,RootStateTypes>={
  namespaced: import.meta.env.MODE !=='production',
  state,
  mutations,
  actions
}

export default appModule
