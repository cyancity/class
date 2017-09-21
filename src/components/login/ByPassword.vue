<template>
  <div>
    <x-header title="登陆"></x-header>
    <group>
      <x-input title="手机号" name="phone" type="tel" :debounce="1000" placeholder="请输入手机号码" v-model="phoneNum" @on-change="change"></x-input>
      <x-input title="密码" v-model="password" type="text" placeholder="请输入密码" @on-enter="enter"></x-input>
      <router-link to="/login/reset">忘记密码</router-link>
      <x-button text="登陆" type="primary" :show-loading="validateLogin" @click.native="login"></x-button>
    </group>
    <router-link to="register">免费注册</router-link>
    <router-link to="login/phone">手机快捷登陆</router-link>
  </div>
</template>

<script>
import { Group, XHeader, XInput, XButton } from 'vux'
export default {
  components: {
    Group,
    XHeader,
    XInput,
    XButton
  },
  data () {
    return {
      loginInfo: {
        phone: '',
        password: ''
      },
      validateLogin: false
    }
  },
  methods: {
    change () {
      console.log(this.phoneNum)
    },
    enter () {
      console.log(this.password)
    },
    login () {
      console.log(this.phoneNum)
      this.validateLogin = true
      this.$store.dispatch('LoginByPassword', this.loginInfo).then(() => {
        this.validateLogin = false
        this.$router.push('/')
      }).catch(() => {
        this.validateLogin = false
      })
    }
  }
}
</script>

<style>

</style>
