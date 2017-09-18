const getters = {
  token: state => state.user.name,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  status: state => state.user.status,
  captcha: state => state.user.captcha,
  phone: state => state.user.phone,
  feedsInfo: state => state.course.course.homeFeeds
}

export default getters
