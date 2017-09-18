import fetch from '@/utils/fetch'

export function getHomeFeeds () {
  return fetch({
    url: '/recommand',
    method: 'get'
  })
}
