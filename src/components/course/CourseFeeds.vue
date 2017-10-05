/*
 * @Author: Li
 * @Date: 2017-09-03 02:49:48
 * @Last Modified by: cyancity-mac
 * @Last Modified time: 2017-10-05 12:06:02
 * @Description:
 */
<template>
  <div>
    <blockquote class="home-quote">
      <p class="home-title">Demo</p>
    </blockquote>
    <div v-for="(info, index) in feedsInfo" :key="index">
      <x-img :src="info.image" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
      <div class="feeds-info">
        {{info.title}}
        {{info.max_number}}
        {{info.surplus_number}}
        {{info.position}}
      </div>
    </div>
  </div>
</template>

<script>
import { XImg, GroupTitle } from 'vux'

export default {
  components: {
    XImg,
    GroupTitle
  },
  methods: {
    success (src, ele) {
      console.log('success load', src)
      const span = ele.parentNode.querySelector('span')
      ele.parentNode.removeChild(span)
    },
    error (src, ele, msg) {
      console.log('error load', msg, src)
      const span = ele.parentNode.querySelector('span')
      span.innerText = 'load error'
    },
    getHomeFeeds () {
      this.$store.dispatch('GetHomeFeeds')
      let feedsInfo = this.$store.state.course
      this.feedsInfo = feedsInfo.homeFeeds
      console.log(this.feedsInfo)
    }
  },
  data () {
    return {
      feedsInfo: [
      ]
    }
  },
  mounted () {
    this.getHomeFeeds()
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/common'

.feeds-info
  display: flex
  font-size 16px
  line-height 1.6
</style>
