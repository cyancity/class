<template>
  <div>
    <x-header title="登陆"></x-header>
    <group>
      <x-input title="手机号" type="tel" v-model="userInfo.phone" placeholder="请输入手机号码" is-type="china-mobile"></x-input>
      <div class="captcha">
        <x-input title="验证码" type="number" v-model="userInfo.captcha" placeholder="请输入验证码"></x-input>
        <button class="send" @click="sendCaptcha" ref="captcha">
          发送验证码
        </button>
      </div>
    </group>
    <x-button text="登陆" type="primary" @click.native="register" :disabled="isRegister"></x-button>
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
      // 三项都选中才可以注册
      if (this.userInfo.phone && this.userInfo.captcha && this.isAgree) {
        return false
      }
      return true
    }
  },
  methods: {
    login () {
      if (this.isLogin) {
        this.$store.dispatch('LoginByPhone', this.userInfo).then(res => {
          if (res === 'success') {
            this.$vux.toast.show({
              text: '登录成功',
              type: 'success'
            })
            setTimeout(() => {
              if (this.$router.history) {
                this.$router.push('')
              } else {
                this.$router.push('/home')
              }
              // judge whether has previous history, jump to previous page, if not push to home
            }, 800);
          } else {
            this.$vux.toast.show({
              text: res.errMsg,
              type: 'cancel'
            })
          }
        }).catch(error => {
          console.log(error)
          this.$vux.toast.show({
            text: '操作失败,请稍后重试',
            type: 'cancel',
            width: '10em'
          })
        })
      } else {
        console.log('error')
      }
    },
    sendCaptcha () {
      let captcha = this.$refs.captcha
      setTimer(captcha, 60)
      this.$store.dispatch('SendCaptcha', this.userInfo.phone).catch(error => {
        this.$vux.toast.show({
          text: error,
          type: 'cancel'
        })
      })
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
