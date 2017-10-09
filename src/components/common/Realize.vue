<template>
  <div>
    <x-header></x-header>
    <group>
      <x-input title="真实姓名" v-model="userInfo.name"></x-input>
      <x-input title="身份证号" v-model="userInfo.id"></x-input>
    </group>
    <x-button @click="realize"></x-button>
  </div>
</template>

<script>
import { XHeader, Group, XInput, XButton } from 'vux'
export default {
  components: {
    XHeader,
    Group,
    XInput,
    XButton
  },
  data () {
    return {
      userInfo: {
        name: '',
        id: ''
      }
    }
  },
  methods: {
    realize () {
      if (this.isRealize) {
        this.$store.dispatch('Realize', this.userInfo).then(res => {
          if (res === 'success') {
            this.$vux.toast.show({
              type: 'success',
              text: '实名认证成功'
            })
            setTimeout(this.$router.push('/user'), 800)
          } else {
            this.$vux.toast.show({
              text: res.errMsg,
              type: 'cancel'
            })
          }
        }).catch(() => {
          this.$vux.toast.show({
            text: '操作失败，请稍后重试',
            type: 'cacel'
          })
        })
      } else {
        this.$vux.toast.show({
          text: '请填写完整',
          type: 'cancel'
        })
      }
    }
  }
}
</script>

<style>

</style>
