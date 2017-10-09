import fetch from '@/utils/fetch'

export function realize (phone, name, id) {
  let data = {
    phone,
    name,
    id
  }
  return fetch({
    url: '/user/real',
    method: 'post',
    data
  })
}
