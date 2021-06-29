import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const PermissionRouter:Array<RouteRecordRaw> = [
  {
    path:'profile',
    component:Layout,
    redirect: '/profile/index',
    meta: { hidden: true },
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index.vue'),
        name: 'Profile',
        meta: {
          title: 'profile',
          icon: 'user',
          noCache: true
        }
      }
    ]
  },
]
export default PermissionRouter

