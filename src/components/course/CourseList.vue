/*
 * @Author: Li 
 * @Date: 2017-09-03 02:48:35 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-09-14 14:07:36
 * @Description: Page for user to find course 
 */
<template>
  <div>
    <x-header title="找课程"></x-header>
    <div class="course" v-for="(item, index) in lists" :key="index">
      <img :src="item.course_pic" width="100%" height="100%">
      <div class="list-item">
        <h4>{{ item.title }}</h4>
        <span class="info-l">{{ item.num }}</span>
        <span class="info-l">{{ item.course_member }}</span>
        <span class="info-r">{{ item.course_quota }}</span>
        <span class="price">{{ item.course_price }}</span>
      </div>
    </div>
  </div> 
</template>

<script>
import { XHeader, XImg } from 'vux'
export default {
  components: {
    XHeader,
    XImg
  },
  data () {
    return {
      lists: [
        {
          'course_pic': 'https://resa6.hjfile.cn/uploads/c4e0273a-7cf6-483a-b390-34dea438b1a6.jpg',
          'title': '课程列表',
          'num': '1',
          'course_member': '1',
          'course_quota': '1',
          'course_price': '1'
        }
      ]
    }
  },
  methods: {
    getCouseList () {

    }
  },
  mounted () {
    this.getCouseList()
  }
}
</script>

<style lang="stylus" scoped>
.course
  img
  width 100%
  height 100%
  .list-item
    display flex
    .info-l
      text-align center
      padding 0 4px
      line-height 1.6rem
      font-size 1rem
      border-right 2px solid #000
    .info-r
    .price
      font-size 20px
      color #ecc
</style>
