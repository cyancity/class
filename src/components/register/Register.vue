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
    <x-button text="注册" type="primary" @click.native="register" :disabled="!isRegister"></x-button>
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
        captcha: ''
      },
      isAgree: false
    }
  },
  computed: {
    isRegister () {
      // 四项都选中才可以注册
      if (this.userInfo.phone && this.userInfo.captcha && this.isAgree) {
        return true
      }
      return false
    }
  },
  methods: {
    register () {
      console.log(this.isRegister)
      if (this.isRegister) {
        this.$store.dispatch('Register', this.userInfo).then(res => {
          if (res === 'success') {
            this.$vux.toast.show({
              text: '注册成功，请选择身份',
              type: 'success'
            })
            setTimeout(this.$router.push('pass'), 800)
          } else {
            this.$vux.toast.show({
              text: res.errMsg,
              type: 'cancel',
              width: '10em'
            })
          }
        }).catch(error => {
          this.$vux.toast.show({
            text: '操作失败,请稍后重试',
            type: 'cancel',
            width: '10em'
          })
          console.log(error)
        })
      } else {
        this.$vux.toast.show({
          text: '请填写完整',
          type: 'cancel'
        })
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
