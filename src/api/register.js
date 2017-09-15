import fetch from '@/utils/fetch'

export function register (userInfo) {
  let data = userInfo
  return fetch({
    url: 'register',
    method: 'post',
    data
  })
}
