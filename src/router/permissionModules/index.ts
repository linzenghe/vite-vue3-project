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
    meta:{ title:'组件列表', icon: 'icon-shanghu'},
    children: [
      {
        path: 'index',
        component: () => import('@/views/components-demo/index.vue'),
        name: 'Component',
        meta: {
          title: '组件',
          icon: 'icon-shanghu',
        }
      },
      {
        path: 'index2',
        component: () => import('@/views/components-demo/index2.vue'),
        name: 'Component2',
        meta: {
          title: '组件2',
          icon: 'icon-shanghu',
        }
      },
      {
        path: 'index3',
        component: () => import('@/views/components-demo/index2.vue'),
        name: 'Component3',
        meta: {
          title: '组件3',
          icon: 'icon-shanghu',
        }
      }
    ]
  },
]
export default PermissionRouter

