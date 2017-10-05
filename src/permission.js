import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

function hasPermission (roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = [
  '/login',
  '/register',
  '/404',
  '/authredirect',
  '/home'
]
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (store.getters.roles.length === 0) { // judge
        store.dispatch('GetUserInfo').then(res => { // pull user info
          let roles = store.getters.roles
          store.dispatch('GenerateRoutes', { roles }).then(() => {
            router.addRoutes(store.getters.addRouters) // add routes dynamically
            next({ ...to })
          })
        }).catch((error) => {
          console.log(error)
          store.dispatch('FrontLogOut').then(() => {
            next({ path: '/login' })
          })
        })
      } else {
        if (hasPermission(store.getters.roles, to.meta.role)) {
          next()
        } else {
          next({ path: '/401', query: { noGoBack: true } })
        }
      }
    }
  } else {
    console.log('not get token')
    if (whiteList.indexOf(to.path) !== -1) { // if to.path in the whiteList, go directly
      next()
    } else {
      next('/') // if not all the request will redirect to login page
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
