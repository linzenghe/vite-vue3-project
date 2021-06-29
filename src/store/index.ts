/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-04 09:11:25
 */
// import { createStore } from 'vuex'

// import { store as app, AppStore, AppState } from '@/store/modules/app'

// export interface RootState{
//   app: AppStore,
// }

// export type Store = AppStore<Pick<RootState,'app'>>

// export const store = createStore({
//   modules:{
//     app
//   }
// })

// export function userStore():Store {
//   return store as Store
// }


import { InjectionKey } from 'vue'
import {
  createStore,Store,useStore as baseUseStore,createLogger
} from 'vuex'

import RootStateTypes,{ AllStateTypes } from '@/store/interface'
// 引入测试子模块
import userModule from '@/store/modules/user'
import settingsModule from '@/store/modules/setting'

export default createStore<RootStateTypes>({
  plugins:import.meta.env.MODE === 'production'? []: [createLogger()],
  state:{},
  getters:{},
  mutations:{},
  actions:{},
  modules:{
    userModule,
    settingsModule
  }
})

export const key: InjectionKey<Store<RootStateTypes>> = Symbol('vue-store')

// 从store中心 统一导出 useStore方法
export function useStore<T= AllStateTypes>(){
  return baseUseStore<T>(key)
}
