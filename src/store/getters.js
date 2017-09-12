const getters = {
  token: state => state.user.name,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  status: state => state.user.status
}

export default getters