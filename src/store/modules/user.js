import { sendCaptcha, loginByPassword, logout, getUserInfo, loginByPhone, resetPassword } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { register } from '@/api/register'
// new an vue instance to inject toast plugins in to axios interceptors
import Vue from 'vue'
import { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)
const user = {
  state: {
    userId: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    captcha: '',
    phone: '',
    location: '',
    tag: '',
    confirmation: '',
    socialAccount: {}
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
    SET_USERID: (state, userId) => {
      state.userId = userId
    },
    SET_SOCIALACCOUNT: (state, socialAccount) => {
      state.socialAccount = socialAccount
    },
    SET_CONFIRMATION: (state, confirmation) => {
      state.confirmation = confirmation
    },
    SET_TAG: (state, tag) => {
      state.tag = tag
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
    },
    SET_LOCATION: (state, location) => {
      state.location = location
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
          if (res.data.code !== '1') {
            reject(res.data.errMsg)
          }
          resolve()
        }).catch(error => {
          reject('未知错误')
          console.log(error)
        })
      })
    },
    Register ({commit}, data) {
      return new Promise((resolve, reject) => {
        register(data).then(res => {
          if (res.data.code === '3') {
            setToken(res.data.token)
            commit('SET_TOKEN', res.data.token)
            resolve('push')
          } else {
            resolve(res.data)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    LoginByPhone ({commit}, payload) {
      return new Promise((resolve, reject) => {
        loginByPhone(payload).then(res => {
          Vue.$vux.toast.show({
            text: '登录成功',
            type: 'success'
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
        let user = state.phone || state.userId
        getUserInfo(user, state.token).then(res => {
          // if get success, will commit userinfo, if not, reject res code and msg to components to handle
          if (res.data.code === 2) {
            const data = res.data.userinfo
            commit('SET_USERID', data.user_id)
            commit('SET_SOCIALACCOUNT', data.socialAccount)
            commit('SET_TAG', data.tag)
            commit('SET_LOCATION', data.location)
            commit('SET_ROLES', data.identity)
            commit('SET_NAME', data.real_name)
            commit('SET_AVATAR', data.head_image)
            resolve()
          }
          reject(res)
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
          resetPassword(payload)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
