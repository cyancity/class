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
  '/'
]
const afterLoginRouter = [
  '/login',
  '/register',
  '/choose'
]
router.beforeEach((to, from, next) => {
  NProgress.start()
  // judge whether user is logged in
  if (getToken()) {
    if (afterLoginRouter.indexOf(to.path) >= 0) {
      // when user open route in afterLoginRouter will be redirect to home page
      next({ path: '/' })
    } else {
      // if user do not has role
      if (store.getters.roles.length === 0) { // judge
        store.dispatch('GetUserInfo').then(res => { // send request to get user info
          let roles = store.getters.roles
          store.dispatch('GenerateRoutes', { roles }).then(() => { // depend on role to generate route
            router.addRoutes(store.getters.addRouters) // add routes dynamically
            next({ ...to })
          })
        }).catch(() => {
          store.dispatch('FrontLogOut').then(() => {
            next({ path: '/login' }) // if has error, log user out
          })
        })
      } else {
        if (hasPermission(store.getters.roles, to.meta.role)) {
          next() // judge permission to routes
        } else {
          next({ path: '/401', query: { noGoBack: true } })
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // if to.path in the whiteList, go directly
      next()
    } else {
      next('/') // if not, all the request will redirect to login page
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
