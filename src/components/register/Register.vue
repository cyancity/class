<template>
  <div>
    <x-header title="注册"></x-header>
    <group>
      <x-input title="手机号" type="tel" v-model="userInfo.phone" placeholder="请输入手机号码" is-type="china-mobile"></x-input>
      <div class="captcha">
        <x-input title="验证码" type="number" v-model="userInfo.captcha" placeholder="请输入验证码"></x-input>
        <button class="send" @click="sendCaptcha" ref="captcha">
          发送验证码
        </button>
      </div>
    </group>
    <div class="protocol">
      <!-- <p>
        <input type="checkbox" ref="protocol" checked="false" @click="isAgree">
        同意此协议
      </p> -->
      <check-icon :value.sync="isAgree">同意此协议</check-icon>
    </div>
    <x-button text="注册" type="primary" @click.native="register" :disabled="isRegister"></x-button>
  </div>
</template>

<script>
import { Group, XHeader, XInput, XButton, CheckIcon } from 'vux'
import { setTimer } from '../../utils/index'
export default {
  components: {
    Group,
    XInput,
    XButton,
    XHeader,
    CheckIcon
  },
  data () {
    return {
      userInfo: {
        phone: '',
        captcha: '',
        password: ''
      },
      isAgree: false
    }
  },
  computed: {
    isRegister () {
      // 四项都选中才可以注册
      if (this.userInfo.phone && this.userInfo.captcha && this.isAgree) {
        return false
      }
      return true
    }
  },
  methods: {
    register () {
      if (this.isAgree) {
        this.$store.dispatch('Register', this.userInfo).then(res => {
          console.log(res)
          this.$router.push('/register/pass')
        }).catch(error => {
          alert('err')
          console.log(error)
        })
      } else {
        console.log('error')
      }
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
  margin 0 auto
</style>
