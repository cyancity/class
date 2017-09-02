/*
 * @Author: Li 
 * @Date: 2017-09-03 02:49:48 
 * @Last Modified by: Li-1700x
 * @Last Modified time: 2017-09-03 03:06:10
 * @Description: 
 */
<template>
  <div>
    <group-title>Demo-3</group-title>
    <div v-for="(info, index) in courseInfo" :key="index" style="background-color:yellow;text-align:center;">
      <span style="font-size:20px;">Loading</span>
      <x-img :src="info.course_pic" @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
      {{info.course_title}}
      {{info.course_menber}}
      {{info.course_quota}}
      {{info.course_number}}
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
    }
  },
  data () {
    return {
      // Info Content
      /** @param course_pic       课程背景图片
       *  @param course_title     课程名称
       *  @param course_member    课程最大人数
       *  @param course_number    总课时数
       *  @param course_location  课程地址
       *  @param rest_quota       课程剩余名额
       *  @param price            门店价
       *  @param real_price       实际付款价格
       *  @param money_save       优惠数额
       *  @param discount_percent 优惠比例
       *  @param discount_percent 优惠比例
       */
      courseInfo: [
        {
          'course_pic': 'https://o5omsejde.qnssl.com/demo/test7.jpg',
          'course_title': 'demo',
          'course_member': '10',
          'course_number': '6',
          'course_quota': '3'
        }
      ]
    }
  }
}
</script>

<style>

</style>
