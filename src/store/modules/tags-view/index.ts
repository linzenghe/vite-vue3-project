/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-04 10:52:39
 */

import { Module } from 'vuex'

import RootStateTypes from '@/store/interface'
import { mutations } from './mutations'
import { actions } from './actions'


import {TagsViewState, state} from './state'


const settingsModule:Module<TagsViewState,RootStateTypes>={
  namespaced: import.meta.env.MODE !=='production',
  state,
  mutations,
  actions
}

export default settingsModule
