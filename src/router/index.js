import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import ByPassword from '@/components/login/ByPassword'
import ByPhone from '@/components/login/ByPhone'
import ResetPassword from '@/components/login/ResetPassword'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      children: [
        {
          path: '',
          name: 'ByPassword',
          component: ByPassword
        },
        {
          path: 'phone',
          name: 'ByPhone',
          component: ByPhone
        },
        {
          path: 'reset',
          name: 'ResetPassword',
          component: ResetPassword
        }
      ]
    }
  ]
})
