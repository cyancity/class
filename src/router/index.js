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
import Register from '@/components/register/Register'
import RegisterPass from '@/components/register/RegisterPass'

// choose identity
import Choose from '@/components/login/SelectIdentity'

// course
import CourseList from '@/components/course/CourseList'

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
  { path: '/register', component: Register },
  { path: '/register/pass', component: RegisterPass },
  { path: '/login',
    component: Login,
    children: [
      { path: '', component: ByPassword },
      { path: 'phone', component: ByPhone },
      { path: 'reset', component: ResetPassword },
      { path: 'choose', component: Choose }
    ]
  },
  { path: '/authredirect', component: AuthRedirect },
  { path: '/404', component: NotFound },
  { path: '/401', component: Unauthorized },
  { path: '/', component: Home },
  { path: '/course/list', component: CourseList }
]

export default new Router({
  mode: 'history',
  routes: constantRouterMap
})

export const asyncRouterMap = [
  { path: '/choose', component: Choose, meta: { role: ['user', 'teacher'] } },
  { path: '/user/follow', component: UserFollow, meta: { role: ['user'] } },
  {
    path: '/user',
    component: User,
    children: [
      { path: '', component: User },
      { path: 'course/list', component: UserCourseList },
      { path: 'info', component: UserInfo }
    ]
  }
]
