/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-04 10:52:39
 */
import { Module } from 'vuex'

import RootStateTypes from '@/store/interface'

import UserModuleTypes from './interface'

import { UserActionTypes } from './action-types'
import { UserMutationTypes } from './mutations-types'


const userModule:Module<UserModuleTypes,RootStateTypes>={
  namespaced: import.meta.env.MODE !=='production',
  state:{
    token:'121',
    userInfo:{}
  },
  mutations:{

  },
  actions:{

  }
}
export default userModule
