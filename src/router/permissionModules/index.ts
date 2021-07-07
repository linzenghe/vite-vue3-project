import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const PermissionRouter:Array<RouteRecordRaw> = [
  {
    path:'/profile',
    component:Layout,
    redirect: '/profile/index',
    meta: { hidden: true },
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index.vue'),
        name: 'Profile',
        meta: {
          title: '个人中心',
          icon: 'icon-shanghu',
          noCache: true
        }
      }
    ]
  },
  {
    path:'/component',
    component:Layout,
    redirect: '/component/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/components-demo/index.vue'),
        name: 'Component',
        meta: {
          title: '组件',
          icon: 'icon-shanghu',
          noCache: true
        }
      }
    ]
  },
]
export default PermissionRouter

