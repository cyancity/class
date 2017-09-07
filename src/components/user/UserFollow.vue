<template>
  <div>
    <panel v-for="(item, index) in followList" :key="index" header="我关注的" :list="item" type="1"></panel>
  </div>
</template>

<script>
import { Panel } from 'vux'

export default {
  components: [
    Panel
  ],
  data () {
    return {
      followList: [
        {'title': 'XXX机构', 'desc': '江苏镇江江苏大学', 'src': 'https://cn.vuejs.org/images/logo.png'},
        {'title': 'XXX机构', 'desc': '江苏镇江江苏大学', 'src': 'https://cn.vuejs.org/images/logo.png'},
        {'title': 'XXX机构', 'desc': '江苏镇江江苏大学', 'src': 'https://cn.vuejs.org/images/logo.png'},
        {'title': 'XXX机构', 'desc': '江苏镇江江苏大学', 'src': 'https://cn.vuejs.org/images/logo.png'},
        {'title': 'XXX机构', 'desc': '江苏镇江江苏大学', 'src': 'https://cn.vuejs.org/images/logo.png'},
        {'title': 'XXX机构', 'desc': '江苏镇江江苏大学', 'src': 'https://cn.vuejs.org/images/logo.png'},
        {'title': 'XXX机构', 'desc': '江苏镇江江苏大学', 'src': 'https://cn.vuejs.org/images/logo.png'},
        {'title': 'XXX机构', 'desc': '江苏镇江江苏大学', 'src': 'https://cn.vuejs.org/images/logo.png'},
        {'title': 'XXX机构', 'desc': '江苏镇江江苏大学', 'src': 'https://cn.vuejs.org/images/logo.png'}
      ]
    }
  }
}
</script>

<style>

</style>
