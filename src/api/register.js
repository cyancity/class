import fetch from '@/utils/fetch'

export function register (userInfo) {
  let data = userInfo
  return fetch({
    url: 'user/register',
    method: 'post',
    data
  })
}
