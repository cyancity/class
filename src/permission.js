import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'


function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList= ['/login','/authredirect']
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login')
      next({ path: '/' })
  } else {
    if (store.getters.roles.length === 0 ) {
      store.dispatch('GetUserInfo').then(res =>{
        const roles = res.data.role
        store.dispatch('GetUserInfo', { roles }).then(() => {
          router.addRoutes(store.getters.addRouters)
          next({ ...to })
        })
      }).catch(() => {
        store.dispatch('FedLogOut').then(()=> {
          next({ path: 'login'})
        })
      })
    } else{
      if (hasPermission(store.getters.roles, to.meta.role)) {
        next()
      } else {
        next({ path: '/401', query: { noGoBack: true }})
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !==-1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})