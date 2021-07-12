/*
 * @Dsc: 文件描述
 * @Author: zenghe
 * @Date: 2021-07-06 11:10:47
 */
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import router from '@/router'
import { RouteLocationNormalized } from 'vue-router'

import store, { useStore } from '@/store'

import { UserActionTypes } from './store/modules/user/actions'
import { PermissionActionType } from './store/modules/permission/actions'
import { ElMessage } from 'element-plus'

const whiteList = ['/login', '/auth-redirect']

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to: RouteLocationNormalized, _: RouteLocationNormalized, next: any) => {
  // Start progress bar
  NProgress.start()

  // const store = useStore()

  // Determine whether the user has logged in
  if (store.state['user'].token) {
    if (to.path === '/login') {
      // If is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      // Check whether the user has obtained his permission roles
      if (!store.state['user'].roles.length) {
        try {
          // Note: roles must be a object array! such as: ['admin'] or ['developer', 'editor']
          await store.dispatch('user/' + UserActionTypes.ACTION_GET_USER_INFO, undefined)
          const roles = store.state['user'].roles
          // Generate accessible routes map based on role
          console.log('roles', roles)
          store.dispatch('permission/' + PermissionActionType.ACTION_SET_ROUTES, roles)
          // Dynamically add accessible routes
          store.state['permission'].dynamicRoutes.forEach((route:any) => {
            router.addRoute(route)
          })
          // Hack: ensure addRoutes is complete
          // Set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (err) {
          // Remove token and redirect to login page
          store.dispatch('user/' + UserActionTypes.ACTION_RESET_TOKEN, undefined)
          console.log(err)
          ElMessage.error(err || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      } else {
        next()
      }
    }
  } else {
    // Has no token
    if (whiteList.indexOf(to.path) !== -1) {
      // In the free login whitelist, go directly
      next()
    } else {
      // Other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach((to: RouteLocationNormalized) => {
  // Finish progress bar
  // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
  NProgress.done()
  // set page title
  // document.title = getPageTitle(to.meta.title)
})
