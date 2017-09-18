import fetch from '@/utils/fetch'
// 如果只有一个export,则要写default,不然无法导出
export default function getHomeFeeds () {
  return fetch({
    url: '/recommand',
    method: 'get'
  })
}
