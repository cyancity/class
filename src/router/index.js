import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import ByPassword from '@/components/login/ByPassword'
import ByPhone from '@/components/login/ByPhone'
import ResetPassword from '@/components/login/ResetPassword'
import User from '@/pages/User'
import UserCourseList from '@/components/user/UserCourseList'
import UserInfo from '@/components/user/UserInfo'
import UserFollow from '@/components/user/UserFollow'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login',
    name: 'Login',
    component: Login,
    children: [
      { path: '', name: 'ByPassword', component: ByPassword },
      { path: 'phone', name: 'ByPhone', component: ByPhone },
      { path: 'reset', name: 'ResetPassword', component: ResetPassword }
    ]
  },
  { path: '/authredirect', component: import('login/authredirect') },
  { path: '/404', component: import('errorPage/404') },
  { path: '/401', component: import('errorPage/401') },
  { path: '/', name: 'Home', component: Home },
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
  { path: '/user/info', name: 'UserInfo', component: UserInfo },
  { path: '/user/follow', name: 'UserFollow', component: UserFollow }
]
