import fetch from '@/utils/fetch'

export function loginByPassword (phone, password) {
  const data = {
    phone,
    password
  }
  return fetch({
    url: '/api/login',
    method: 'post',
    data
  })
}

export function logout () {
  return fetch({
    url: '/api/logout',
    method: 'post'
  })
}

export function getUserInfo (token) {
  return fetch({
    url: '/api/user/info',
    method: 'post',
    params: { token }
  })
}
