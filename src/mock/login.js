// import { paramToObj } from '@/utils'

var user = {
  li: {
    code: 2,
    errMsg: 'success',
    userinfo: {
      token: 'user',
      avatar: '',
      real_name: 'li',
      user_id: 1,
      head_image: 'avatar',
      qq_number: '1234567',
      telphone: '12345678901',
      tag: '',
      identity: ['user'],
      area: 'js'
    }
  }
}

export default {
  loginByPhone: config => {
    const { username } = JSON.parse(config.body)
    return user[username]
  },
  getUserInfo: config => {
    // const { token } = paramToObj(config.url)
    if (user['li']['userinfo']['token']) {
      // console.log(token)
      console.log(user['li'])
      return user['li']
    } else {
      return Promise.reject('error')
    }
  },
  logout: () => 'success',
  register: config => {
    let post = JSON.parse(config.body)
    console.log(post)
    user['li'].code = 3
    console.log(user['li'])
    return user['li']
  }
}
