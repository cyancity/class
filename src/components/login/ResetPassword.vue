<template>
  <div>
    <x-header title="重置密码"></x-header>
    <group>
      <x-input title="手机号" name="phone" type="tel" :debounce="1000" placeholder="请输入手机号码" v-model="resetInfo.phone"></x-input>
      <x-input title="新密码" v-model="resetInfo.password" type="text" placeholder="请输入密码"></x-input>
      <div class="captcha">
        <x-input title="验证码" type="number" v-model="resetInfo.captcha" placeholder="请输入验证码"></x-input>
        <button class="send" @click="sendCaptcha" ref="captcha">
          发送验证码
        </button>
      </div>      
      <x-button text="重置密码" type="primary" :show-loading="validateReset" @click.native="reset"></x-button>
    </group>
  </div>
</template>

<script>
import { Group, XHeader, XInput, XButton } from 'vux'
import { setTimer } from '../../utils/index'

export default {
  components: {
    Group,
    XHeader,
    XInput,
    XButton
  },
  data () {
    return {
      resetInfo: {
        phone: '',
        password: '',
        captcha: ''
      },
      validateReset: false
    }
  },
  methods: {
    reset () {
      this.validateReset = true
      this.$store.dispatch('ResetPassword', this.resetInfo).then(() => {
        this.validateReset = false
        this.$vux.toast.show({
          text: '修改成功，正在跳转',
          type: 'success'
        })
        setTimeout(() => {
          this.$router.push('/')
        }, 1500)
      }).catch(() => {
        this.validateReset = false
        this.$vux.toast.show({
          text: '修改失败，请重试',
          type: 'cancel'
        })
      })
    },
    sendCaptcha () {
      let captcha = this.$refs.captcha
      setTimer(captcha, 60)
      this.$store.dispatch('SendCaptcha', this.resetInfo.phone)
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
</style>
