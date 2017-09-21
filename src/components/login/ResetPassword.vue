<template>
  <div>
    <x-header title="重置密码"></x-header>
    <group>
      <x-input title="手机号" name="phone" type="tel" :debounce="1000" placeholder="请输入手机号码" v-model="resetInfo.phone" @on-change="change"></x-input>
      <x-input title="新密码" v-model="resetInfo.password" type="text" placeholder="请输入密码" @on-enter="enter"></x-input>
      <div class="captcha">
        <x-input title="验证码" type="number" v-model="resetInfo.captcha" placeholder="请输入验证码"></x-input>
        <button class="send" @click="sendCaptcha" ref="captcha">
          发送验证码
        </button>
      </div>      
      <router-link to="/login/reset">忘记密码</router-link>
      <x-button text="重置密码" type="primary" :show-loading="validateReset" @click.native="reset"></x-button>
    </group>
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
      resetInfo: {
        phone: '',
        password: '',
        captcha: ''
      },
      validateReset: false
    }
  },
  methods: {
    change () {
      console.log(this.phoneNum)
    },
    enter () {
      console.log(this.password)
    },
    reset () {
      console.log(this.phoneNum)
      this.validateReset = true
      this.$store.dispatch('LoginByPassword', this.resetInfo).then(() => {
        this.validateReset = false
        this.$router.push('/')
      }).catch(() => {
        this.validateReset = false
      })
    }
  }
}
</script>

<style>

</style>
