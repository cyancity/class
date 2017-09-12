<template>
  <div>
    <x-header title="注册"></x-header>
    <group>
      <x-input title="手机号" type="text" placeholder="请输入手机号码"></x-input>
      <x-input title="验证码" type="text" placeholder="请输入手机号码"></x-input>
      <x-input title="密码" type="text" placeholder="请输入手机号码"></x-input>
    </group>
    <input type="radio" placeholder="">
    <x-button text="登陆" type="primary" @click.native="register"></x-button>
  </div>
</template>

<script>
import { Group, XHeader, XInput, XButton } from 'vux'

export default {
  components: {
    Group,
    XInput,
    XButton,
    XHeader
  },
  data () {
    return {
    }
  },
  methods: {
    register () {
      this.$router.push('/choose')
    }
  }
}
</script>

<style>

</style>
