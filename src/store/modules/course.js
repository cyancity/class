import getHomeFeeds from '@/api/feeds'
import Vue from 'vue'
import { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

const course = {
  state: {
    homeFeeds: {},
    args: ''
  },
  mutations: {
    SET_HOMEFEEDS: (state, payload) => {
      state.homeFeeds = payload
    }
  },
  actions: {
    GetHomeFeeds ({ commit }) {
      return new Promise((resolve, reject) => {
        getHomeFeeds().then(res => {
          commit('SET_HOMEFEEDS', res.data.results)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default course
