import { realize } from '@/api/common'

const app = {
  state: {
    isLoading: false,
    direction: 'forward',
    deviceready: '',
    scrollTop: 0
  },
  actions: {
    Realize ({ commit }, payload) {
      let name = payload.name.trim()
      let phone = this.getters.phone
      return new Promise((resolve, reject) => {
        realize(phone, name, payload.id).then(res => {
          if (res.data.code === 2) {
            resolve('success')
          } else {
            resolve(res.data)
          }
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default app
