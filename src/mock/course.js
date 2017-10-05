import Mock from 'mockjs'
import { paramToObj } from '@/utils'

const list = []
const count = 30

for (let i = 0; i < count; i++) {
  list.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    title: '@cname',
    'fee|99-299': 199,
    'max_number|10-60': 30,
    'surplus_number|99-299': 199,
    image: Mock.Random.image('200x100', '#4A7BF7', 'Hello'),
    'browse_number|9-999': 99,
    'position': '@city',
    'telphone|1': ['13531544954', '13632250649', '15820292420', '15999905612'],
    'introduce': '@csentence(10, 20)',
    'free_service': 0,
    'publisher': '@cname(1,3)',
    'content': '@csentence(10, 20)'
  }))
}

export default {
  getCourseInfo: config => {
    const { type, title, page = 1, limit = 15, sort } = paramToObj(config.url)
    let mockInfo = list.filter(item => {
      if (title && item.title.indexOf(title) < 0) return false
      if (type && item.type !== type) return false
    })
    if (sort === '-id') {
      mockInfo = mockInfo.reverse()
    }
    const pageList = mockInfo.filter((item, index) => index < page * limit && index >= limit * (page - 1))

    return {
      total: count,
      items: pageList
    }
  },
  getCourseFeed: config => {
    console.log(config)
    console.log(list)
    return {
      results: list
    }
  }
}
