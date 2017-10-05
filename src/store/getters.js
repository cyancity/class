const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  status: state => state.user.status,
  captcha: state => state.user.captcha,
  phone: state => state.user.phone,
  userId: state => state.user.userId,
  feedsInfo: state => state.course.homeFeeds,
  addRouters: state => state.permission.addRouters
}

export default getters
