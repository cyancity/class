<template>
  <div>
    <x-header title="注册"></x-header>
    <group>
      <x-input title="手机号" type="tel" v-model="userInfo.phone" placeholder="请输入手机号码" is-type="china-mobile"></x-input>
      <x-input title="密码" type="password" v-model="userInfo.password " placeholder="请输入密码"></x-input>
      <x-input title="确认密码" type="password" v-model="userInfo.repassword " placeholder="请确认密码"></x-input>
    </group>
    <x-button text="注册" type="primary" @click.native="postPass" :disabled="isRegister"></x-button>
  </div>
</template>

<script>
import { XHeader, XInput, Group, XButton } from 'vux'
export default {
  components: {
    XHeader,
    XInput,
    Group,
    XButton
  },
  data () {
    return {
      userInfo: {
        password: '',
        repassword: '',
        phone: ''
      }
    }
  },
  mounted () {
    this.userInfo.phone = this.$store.getters.phone
  },
  methods: {
    postPass () {
      this.$store.dispatch('postPass', 'pass')
    }
  }
}
</script>

<style>

</style>
