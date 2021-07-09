/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-04 10:52:39
 */

import { Module } from 'vuex'

import RootStateTypes from '@/store/interface'
import { mutations } from './mutations'
import { actions } from './actions'


import { PermissionState, state} from './state'

const permissionModule:Module<PermissionState,RootStateTypes>={
  namespaced: true,
  state,
  mutations,
  actions
}

export default permissionModule
