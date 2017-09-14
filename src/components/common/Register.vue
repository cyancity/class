<template>
  <div>
    <x-header title="注册"></x-header>
    <group>
      <x-input title="手机号" type="text" v-model="userInfo.phone" placeholder="请输入手机号码"></x-input>
      <div class="captcha">
        <x-input title="验证码" type="text" v-model="userInfo.captcha" placeholder="请输入手机号码"></x-input>
        <x-button mini="true">
          发送验证码
        </x-button>
      </div>
      <x-input title="密码" type="text" v-model="userInfo.password " placeholder="请输入手机号码"></x-input>
    </group>
    <input type="checkbox" placeholder="协议" ref="protocol" checked="false" @click="isAgree">
    <x-button text="注册" type="primary" @click.native="register" disabled="isRegister"></x-button>
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
      userInfo: {
        phone: '',
        captcha: '',
        password: '',
        isRegister: true
      }
    }
  },
  methods: {
    register () {
      if (this.isRegister === false) {
        this.$store.dispatch('register', this.userInfo)
        this.$router.push('/choose')
      } else {
        console.log('error')
      }
    },
    isAgree () {
      this.$refs.protocol.checked
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/common'
.captcha
  display: flex
  .send
    border-radius 5px
    border 1px solid #fff
    background pr-blue
    width 60px
</style>
