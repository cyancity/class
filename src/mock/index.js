import Mock from 'mockjs'
import loginApi from './login'
import courseApi from './course'

Mock.setup({
  timeout: '350-600'
})

Mock.mock(/\/login\//, 'post', loginApi.loginByPhone)
Mock.mock(/\/user\/info/, 'post', loginApi.getUserInfo)
Mock.mock(/\/recommand/, 'get', courseApi.getCourseFeed)
Mock.mock(/\/user\/register/, 'post', loginApi.register)

export default Mock
