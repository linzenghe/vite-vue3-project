/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-06-05 20:44:36
 */
import { RouteRecordRaw } from 'vue-router'

const commonRouter:Array<RouteRecordRaw> = [
  {
    path:'/login',
    name:'Login',
    component:()=>import('@/views/login/index.vue'),
    meta: { hidden: true },
  },
  {
    path:'/401',
    name:'401',
    component:()=>import('@/views/error-page/401.vue'),
    meta: { hidden: true },
  },
  {
    path:'/404',
    name:'404',
    component:()=>import('@/views/error-page/404.vue'),
    meta: { hidden: true },
  }
]
export default commonRouter
