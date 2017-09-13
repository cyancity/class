import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'

// login router
import Login from '@/pages/Login'
import ByPassword from '@/components/login/ByPassword'
import ByPhone from '@/components/login/ByPhone'
import ResetPassword from '@/components/login/ResetPassword'
import AuthRedirect from '@/components/login/AuthRedirect'

// Register
import Register from '@/components/common/Register'

// choose identity
import Choose from '@/components/common/Choose'

// user router
import User from '@/pages/User'
import UserCourseList from '@/components/user/UserCourseList'
import UserInfo from '@/components/user/UserInfo'
import UserFollow from '@/components/user/UserFollow'

// error page
import NotFound from '@/components/error/404'
import Unauthorized from '@/components/error/401'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/register', name: 'Register', component: Register },
  { path: '/login',
    name: 'Login',
    component: Login,
    children: [
      { path: '', name: 'ByPassword', component: ByPassword },
      { path: 'by-phone', name: 'ByPhone', component: ByPhone },
      { path: 'reset', name: 'ResetPassword', component: ResetPassword }
    ]
  },
  { path: '/authredirect', component: AuthRedirect },
  { path: '/404', component: NotFound },
  { path: '/401', component: Unauthorized },
  { path: '/', name: 'Home', component: Home },
  { path: '/user/info', name: 'UserInfo', component: UserInfo }
]

export default new Router({
  mode: 'history',
  routes: constantRouterMap
})

export const asyncRouterMap = [
  {
    path: '/user',
    name: 'User',
    component: User,
    children: [
      { path: '', name: 'User', component: User },
      { path: 'course/list', name: 'UserCourseList', component: UserCourseList }
    ]
  },
  { path: '/user/follow', name: 'UserFollow', component: UserFollow },
  { path: '/choose', name: 'Choose', component: Choose }
]
