<template>
  <div>
    <x-header title="选择身份"></x-header>

    <button-tab v-model="identity">
      <button-tab-item @on-item-click="getIdentity" >家长</button-tab-item>
      <button-tab-item @on-item-click="getIdentity">教师</button-tab-item>
    </button-tab>
    
    <group>
      <x-input title="手机号" type="text" placeholder="请输入手机号码" v-model="phoneNum" is-type="china-mobile" @on-change="change"></x-input>
      <x-input title="密码" v-model="password" type="text" placeholder="请输入密码" @on-enter="enter"></x-input>
      <router-link to="/login/reset">忘记密码</router-link>
      <x-button text="确认" type="primary" :show-loading="validateLogin" @click.native="goHome"></x-button>
    </group>
    <router-link to="register">免费注册</router-link>
    <router-link to="login/by-phone">手机快捷登陆</router-link>
  </div>
</template>

<script>
import { Group, XHeader, XInput, XButton, ButtonTab, ButtonTabItem } from 'vux'
export default {
  components: {
    Group,
    XHeader,
    XInput,
    XButton,
    ButtonTab,
    ButtonTabItem
  },
  data () {
    return {
      identity: 0
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
    },
    getIdentity () {
      console.log(this.identity)
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
