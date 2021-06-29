/*
 * @Dsc: 路由文件
 * @Author: zenghe
 * @Date: 2021-06-04 15:19:42
 */

import {createRouter,createWebHashHistory,RouteParamsRaw,Router,RouteRecordRaw} from 'vue-router'

import Layout from '@/layout/index.vue'

let constantModules:Array<RouteRecordRaw> = []  // 通用路由模块
let permissionModules: Array<RouteRecordRaw> = []  // 权限路由模块

const constanceFiles:Object = import.meta.globEager("./constantModules/*.ts");
const asyncFiles:Object = import.meta.globEager("./permissionModules/*.ts");

// console.log(constanceFiles,asyncFiles)
for(const key in constanceFiles){
  constantModules = constantModules.concat(constanceFiles[key].default)
}
for(const key in asyncFiles){
  permissionModules = permissionModules.concat(asyncFiles[key].default)
}

// 通用路由
export const constantRoutes:Array<RouteRecordRaw> = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path:'/',
    component:Layout,
    redirect:'/dashboard',
    children:[
      {
        path:'dashboard',
        component:()=>import('@/views/dashboard/index.vue'),
        name:'Dashboard',
        meta:{
          title:'dashboard',
          icon:'#icondashboard',
          affix:true
        }
      }
    ]
  },
  ...constantModules
]
// 权限路由
export const asyncRoutes:Array<RouteRecordRaw> = [
  ...permissionModules
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export function resetRouter(){
  const newRouter = router;
  (router as any).matcher = (newRouter as any).matcher;
}

export default router
