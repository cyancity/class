import fetch from '@/utils/fetch'

export function sendCaptcha (telnumber) {
  return fetch({
    url: '/sendcode',
    method: 'post',
    params: {
      telnumber: telnumber
    }
  })
}

export function loginByPassword (phone, password) {
  const data = {
    phone,
    password
  }
  return fetch({
    url: '/login',
    method: 'post',
    data
  })
}

export function logout () {
  return fetch({
    url: '/logout',
    method: 'post'
  })
}

export function getUserInfo (token) {
  return fetch({
    url: '/user/info',
    method: 'post',
    params: { token }
  })
}

export function loginByPhone (phone, captcha) {
  return fetch({
    url: '/user/tellogin',
    method: 'post',
    data: {
      telnumber: phone,
      identifyingcode: captcha
    }
  })
}
