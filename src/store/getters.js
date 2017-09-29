const getters = {
  token: state => state.user.name,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  status: state => state.user.status,
  captcha: state => state.user.captcha,
  phone: state => state.user.phone,
  userId: state => state.user.userId,
  feedsInfo: state => {
    // 取不到homeFeeds, 只能先取所有,然后在view中取出
    console.log(state.course)
    // return state.course.homeFeeds
    return state.course.homeFeeds
  }
}

export default getters
