/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-04 09:11:25
 */
import { InjectionKey } from 'vue'
import {
  createStore, Store, useStore as baseUseStore, createLogger,
} from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import RootStateTypes, { AllStateTypes } from '@/store/interface'

import user from '@/store/modules/user'
import settings from '@/store/modules/setting'
import tagsView from '@/store/modules/tags-view'
import app from '@/store/modules/app'
import permission from '@/store/modules/permission'
const PERSIST_PATHS = ['settings', 'tagsView', 'app', 'permission']
const plugins = import.meta.env.MODE === 'production' ? [createLogger({})] : []
plugins.push(createPersistedState(
  {
    storage: window.sessionStorage,
    paths: PERSIST_PATHS,
  },
))

export default createStore<RootStateTypes>({
  plugins: plugins,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    settings,
    tagsView,
    app,
    permission,
  },
})

export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store')

// 从store中心 统一导出 useStore方法
export function useStore<T= AllStateTypes> () {
  return baseUseStore<T>(key)
}

// export function useStore(): Store {
//   return store as Store
// }
