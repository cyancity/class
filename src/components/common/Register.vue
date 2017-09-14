<template>
  <div>
    <x-header title="注册"></x-header>
    <group>
      <x-input title="手机号" type="text" v-model="userInfo.phone" placeholder="请输入手机号码"></x-input>
      <div class="captcha">
        <x-input title="验证码" type="text" v-model="userInfo.captcha" placeholder="请输入验证码"></x-input>
        <button class="send" @click="sendCaptcha" ref="captcha">
          发送验证码
        </button>
      </div>
      <x-input title="密码" type="text" v-model="userInfo.password " placeholder="请输入密码"></x-input>
    </group>
    <div class="protocol">
      <p>
        <input type="checkbox" ref="protocol" checked="false" @click="isAgree">
        同意此协议
      </p>
    </div>
    <x-button text="注册" type="primary" @click.native="register" :disabled="isRegister"></x-button>
  </div>
</template>

<script>
import { Group, XHeader, XInput, XButton } from 'vux'
import { setTimer } from '../../utils/index'
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
        password: ''
      },
      isRegister: true
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
    },
    sendCaptcha () {
      let captcha = this.$refs.captcha
      setTimer(captcha, 60)
      this.$store.dispatch('SendCaptcha', this.userInfo.phone)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/common'
.captcha
  display: flex
  .send
    display inline-flex
    align-items center
    justify-content center
.protocol
  display flex
  p
    margin 0 auto
</style>
