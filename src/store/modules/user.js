import { sendCaptcha, loginByPassword, logout, getUserInfo, loginByPhone, resetPassword } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { register } from '@/api/register'
// new an vue instance to inject toast plugins in to axios interceptors
import Vue from 'vue'
import { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)
const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    captcha: '',
    phone: ''
  },
  mutations: {
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_CAPTCHA: (state, captcha) => {
      state.captcha = captcha
    },
    SET_PHONE: (state, phone) => {
      state.phone = phone
    }
  },
  actions: {
    LoginByPassword ({ commit }, userInfo) {
      console.log(userInfo)
      const phone = userInfo.phone.trim()
      return new Promise((resolve, reject) => {
        loginByPassword(phone, userInfo.password).then(res => {
          const data = res.data
          setToken(data.token)
          commit('SET_TOKEN', data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    SendCaptcha ({ commit }, data) {
      console.log(data)
      let phone = data.trim()
      return new Promise((resolve, reject) => {
        sendCaptcha(phone).then(res => {
          console.log(res.data.code)
          if (res.data.code === '500') {
            Vue.$vux.toast.show({
              text: '操作失败,请稍后重试',
              type: 'cancel',
              width: '10em'
            })
            resolve()
          }
          resolve()
        }).catch(error => {
          Vue.$vux.toast.show({
            text: '操作失败,请稍后重试',
            type: 'cancel',
            width: '10em'
          })
          reject(error)
        })
      })
    },
    Register ({commit}, data) {
      return new Promise((resolve, reject) => {
        register(data).then(res => {
          resolve()
        }).catch(error => {
          Vue.$vux.toast.show({
            text: '操作失败,请稍后重试',
            type: 'cancel',
            width: '10em'
          })
          reject(error)
        })
      })
    },
    LoginByPhone ({commit}, payload) {
      return new Promise((resolve, reject) => {
        loginByPhone(payload).then(res => {
          // 明儿看一下js异常捕获
          // 这里处理返回信息
          Vue.$vux.toast.show({
            text: '登录成功',
            type: 'success',
            width: '10em'
          })
          resolve()
        }).catch(error => {
          Vue.$vux.toast.show({
            text: '操作失败,请稍后重试',
            type: 'cancel',
            width: '10em'
          })
          reject(error)
        })
      })
    },
    GetUserInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(res => {
          const data = res.data
          commit('SET_ROLES', data.roles)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    Logout ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    ResetPassword ({commit}, payload) {
      return new Promise((resolve, reject) => {
        resetPassword(payload).then(() => {
          commit
        })
      })
    }
  }
}

export default user
