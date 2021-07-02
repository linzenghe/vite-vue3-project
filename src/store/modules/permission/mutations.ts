/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-28 09:18:29
 */

import { MutationTree } from 'vuex'
import { PermissionState } from './state'

import { RouteRecordRaw } from 'vue-router'
import { constantRoutes } from '@/router'

export enum PermissionMutationType{
  SET_ROUTES = 'SET_ROUTES'
}



export type Mutations<S = PermissionState> = {
  [PermissionMutationType.SET_ROUTES](state: S, routes: RouteRecordRaw[]): void
}

export const mutations: MutationTree<PermissionState> & Mutations = {
  [PermissionMutationType.SET_ROUTES](state: PermissionState, routes: RouteRecordRaw[]) {
    state.routes = constantRoutes.concat(routes)
    state.dynamicRoutes = routes
  }
}

